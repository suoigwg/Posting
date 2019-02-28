import React, {Component} from 'react';
import {DetailWrapper, Header, Content} from "./style";
import {actionCreators} from "../detail/store";
import {connect} from "react-redux";

class Detail extends Component {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
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