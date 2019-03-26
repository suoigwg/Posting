import React, {Component} from 'react';
import {Content, DetailWrapper, Header} from "./style";
import {actionCreators} from "./store/index";
import {connect} from "react-redux";

class Detail extends Component {
    render() {
        const {title, content} = this.props;
        const timestamp = new Date(parseInt(this.props.timestamp, 10));
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <p>发表于{timestamp.getFullYear() + '-' + timestamp.getMonth() + '-' + timestamp.getDay()}</p>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
            </DetailWrapper>
        )
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadArticle(id) {
            dispatch(actionCreators.loadArticle(id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Detail);