import React, {Component} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, Top} from "./style";
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import {connect} from "react-redux";
import {getHomeJson} from "./store/actionCreators";
import {actionCreators} from "./store/index";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img'
                         src='https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showTop ? <Top onClick={this.backToTop}>返回</Top> : null}
            </HomeWrapper>
        )
    }

    componentWillMount() {
        this.props.getInitData();
        window.addEventListener('scroll', this.props.changeTopButtonVisibility)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeTopButtonVisibility)
    }

    backToTop() {
        window.scrollTo(0, 0);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        showTop: state.getIn(['home', 'showTopButton'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInitData() {
            const action = getHomeJson();
            dispatch(action);
        },

        changeTopButtonVisibility() {
            if (document.documentElement.scrollTop > 5) {
                dispatch(actionCreators.changeTopBtnAction(true));
            } else {
                dispatch(actionCreators.changeTopBtnAction(false));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);