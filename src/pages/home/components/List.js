import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {ListItem, ListInfo} from "../style"

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                {list.map((item) => {
                    return (
                        <ListItem key={item.get('id')}>
                            <img className='pic' src={item.get('imgUrl')}/>
                            <ListInfo>
                                <a className='title'>{item.get('title')}</a>
                                <p className='brief'>{item.get('brief')}</p>
                            </ListInfo>
                        </ListItem>
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