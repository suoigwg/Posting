import React, {Component} from 'react';
import {WriterList, WriterListItem, WriterWrapper, LoadMoreAuthor} from "../style";
import {connect} from "react-redux";
import {actionCreators} from "../store/actionCreators"
class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterList>
                    {
                        this.props.authors.map((item, idx) => {
                            return (
                                <WriterListItem>
                                    <a className='avatar'><img src={item.get('imgUrl')}/></a>
                                    <a className='follow'>+关注</a>
                                    <a className='name'>{item.get('author')}</a>
                                    <p>{item.get('desc')}</p>
                                </WriterListItem>
                            )
                        })
                    }

                </WriterList>
                <LoadMoreAuthor>查看全部</LoadMoreAuthor>
            </WriterWrapper>
        )
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        authors: state.getIn(['home', 'authorList']),

    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(Writer);