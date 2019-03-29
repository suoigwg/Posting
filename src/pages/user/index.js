import React, {Component} from 'react';
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import './style.scss';
import {Avatar, List} from 'antd';
import {Link} from "react-router-dom";

class UserList extends Component {

    render() {
        const {users} = this.props;
        return (
            <div className={'userlist-wrapper'}>
                <List
                    itemLayout="horizontal"
                    dataSource={users}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar icon={'user'} size={64}/>}
                                title={<Link to={'/user/' + item.id}>{item.username}</Link>}
                            />
                        </List.Item>
                    )}
                />
            </div>

        )
    }

    componentDidMount() {
        this.props.loadUserList();
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        users: state.getIn(['user', 'userlist'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserList() {
            dispatch(actionCreators.loadUserList());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
