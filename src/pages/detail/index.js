import React, {Component} from 'react';
import {Content, DetailWrapper, LikeBtn} from "./style";
import {actionCreators} from "./store/index";
import {connect} from "react-redux";
import {Button, message, Popconfirm, Typography} from "antd";
import Axios from "axios";
import {Redirect} from "react-router";

const {Title, Text} = Typography;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.state = {
            deleted: false
        }
    }


    render() {
        const {title, content, like, date} = this.props;
        if (this.state.deleted) {
            return (<Redirect to={'/'}/>)
        }
        return (
            <DetailWrapper>
                <Title level={1}>{title}</Title>
                <Text type="secondary">发表于{date}</Text>
                <Popconfirm title={"确认要删除这篇文章？"} onConfirm={this.deleteArticle}> <Text
                    type="warning"> 删除</Text></Popconfirm>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
                <LikeBtn>
                    <Button shape="round" icon="like" size={'large'}
                            onClick={this.toggleLike}>{like ? '取消赞' : '赞'}</Button>
                </LikeBtn>
            </DetailWrapper>
        )
    }

    deleteArticle() {
        const {author, userid} = this.props;
        if (author !== userid) {
            message.error("您没有权限删除这篇文章");
            return
        }
        Axios.delete(process.env.REACT_APP_API_ROOT + 'article/delete/' + this.props.match.params.id)
            .then(() => this.setState({deleted: true}))
            .catch(() => message.error("请检查您的网络连接"))
    }

    toggleLike() {
        const article = parseInt(this.props.match.params.id, 10);
        const {userid, like} = this.props;
        if (!userid) {
            message.error("操作失败,请确认您是否登录");
            return;
        }
        const action = !like ? 'like' : 'unlike';
        Axios.post(process.env.REACT_APP_API_ROOT + 'like', {
            user: userid,
            article,
            action
        }, {withCredentials: true}).then(() => this.props.changeLike(!like))
            .catch(() => {
                message.error("操作失败,请确认您的网络连接")
            })
    }

    componentDidMount() {
        this.props.loadArticle(this.props.match.params.id);
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
        timestamp: state.getIn(['detail', 'timestamp']),
        like: state.getIn(['detail', 'like']),
        date: state.getIn(['detail', 'date']),
        userid: state.getIn(['login', 'userid']),
        author: state.getIn(['detail', 'author']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadArticle(id) {
            dispatch(actionCreators.loadArticle(id));
        },
        checkLike(user, article) {
            dispatch(actionCreators.checkIfUserLike(user, article));
        },
        changeLike(like) {
            dispatch(actionCreators.changeLike(like));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Detail);