import React, {Component} from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from "./style";
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import {connect} from "react-redux";
import {getHomeJson} from "./store/actionCreators";

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
            </HomeWrapper>
        )
    }

    componentWillMount() {
        this.props.getInitData();
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInitData() {
            const action = getHomeJson();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);