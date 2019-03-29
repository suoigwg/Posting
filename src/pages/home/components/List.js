import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {ListInfo, ListItem} from "../style"
import {Link} from "react-router-dom";
import {Typography} from "antd";

const {Title, Text} = Typography;

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                {list.map((item, idx) => {
                    return (
                        <Link key={item.id} to={'/detail/' + item.id}>
                            <ListItem>
                                <img alt='' className='pic' src={''}/>
                                <ListInfo>
                                    <Title level={2}>{item.title}</Title>
                                    <Text
                                        className='brief'>{item.summary}</Text>
                                </ListInfo>
                            </ListItem>
                        </Link>

                    )
                })}
            </Fragment>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        list: state.getIn(['home', 'articleList']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(List);