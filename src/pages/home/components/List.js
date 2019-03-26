import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {ListInfo, ListItem} from "../style"
import {Link} from "react-router-dom";

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
                                    <p>{item.title}</p>
                                    <p className='brief'>{item.content}</p>
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