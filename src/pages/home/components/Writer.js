import React, {Component} from 'react';
import {LoadMoreAuthor, WriterList, WriterListItem, WriterWrapper} from "../style";
import {connect} from "react-redux";
import {actionCreators} from "../store/actionCreators"
import {Link} from "react-router-dom";
import {Avatar} from "antd";

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterList>
                    {
                        this.props.authors.map((item, idx) => {
                            return (
                                <WriterListItem>
                                    <Avatar size={64} icon={'user'}/>
                                    <div style={{padding: '10px 0 0 15px'}}>
                                        <a className='follow'>+关注</a>
                                        <Link to={'/user/' + item.id}>
                                            <a className='name'>{item.username}</a>
                                        </Link>
                                    </div>
                                    <p></p>
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