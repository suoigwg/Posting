import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {RecommendWrapper, RecommendItem} from "../style";

class Recommend extends Component {
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                {list.map((item) => {
                    return (
                        <RecommendWrapper>
                            <RecommendItem imgUrl={item.get('imgUrl')}>
                            </RecommendItem>
                        </RecommendWrapper>
                    )
                })}
            </Fragment>

        )
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        list: state.getIn(['home', 'linkList']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(Recommend);