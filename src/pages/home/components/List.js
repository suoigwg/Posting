import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {ListItem, ListInfo} from "../style"
import {Link} from "react-router-dom";

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                {list.map((item, idx) => {
                    return (
                        //应修改为id
                        <Link key={idx} to='/detail'>
                            <ListItem>
                                <img alt='' className='pic' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <p>{item.get('title')}</p>
                                    <p className='brief'>{item.get('desc')}</p>
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