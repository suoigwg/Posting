import React, {Component} from 'react';
import {LoadMoreAuthor, WriterList, WriterListItem, WriterWrapper} from "../style";
import {connect} from "react-redux";
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
                                <WriterListItem key={item.id}>
                                    <Avatar size={64} icon={'user'}/>
                                    <div style={{marginLeft: '15px'}}>
                                        <Link to={'/user/' + item.id}>
                                            <h4 className='name'
                                                style={{lineHeight: '64px', fontSize: '22px'}}>{item.username}</h4>
                                        </Link>
                                    </div>
                                    <p></p>
                                </WriterListItem>
                            )
                        })
                    }

                </WriterList>
                <LoadMoreAuthor><Link to={'/userlist'}>查看全部</Link></LoadMoreAuthor>
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