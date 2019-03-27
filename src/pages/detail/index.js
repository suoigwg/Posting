import React, {Component} from 'react';
import {Content, DetailWrapper, Header, LikeBtn} from "./style";
import {actionCreators} from "./store/index";
import {connect} from "react-redux";
import {Button, message} from "antd";
import Axios from "axios";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
    }


    render() {
        const {title, content, like} = this.props;
        const timestamp = new Date(parseInt(this.props.timestamp, 10));
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <p>发表于{timestamp.getFullYear() + '-' + timestamp.getMonth() + '-' + timestamp.getDay()}</p>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
                <LikeBtn>
                    <Button shape="round" icon="like" size={'large'}
                            onClick={this.toggleLike}>{like ? '取消赞' : '赞'}</Button>
                </LikeBtn>
            </DetailWrapper>
        )
    }

    toggleLike() {
        const article = parseInt(this.props.match.params.id, 10);
        const {userid, like} = this.props;
        if (!userid) return;
        const action = !like ? 'like' : 'unlike';
        Axios.post(process.env.REACT_APP_API_ROOT + 'like', {
            user: userid,
            article,
            action
        }).then(() => this.props.changeLike(!like))
            .catch(() => {
                message.error("操作失败")
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
        userid: state.getIn(['login', 'userid']),
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