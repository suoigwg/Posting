import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoItem,
    SearchInfoList,
    SearchInfoSwitch,
    SearchInfoTitle,
    SearchWrapper
} from "./style";
import {CSSTransition} from 'react-transition-group'
import * as actionCreators from './store/actionCreaters'
import {constants} from "./store";
import * as loginActionCreators from '../../pages/login/store/actionCreators'
import {Link} from "react-router-dom";
import {Avatar, message} from "antd";

message.config({
    duration: 1,
    maxCount: 2,
});

class Header extends Component{

    showHotTopic(){
        const {focused, list, hotTopicMouseIn, hotTopicMouseOut, mouseIn, totalPage, currentPage, switchPage} = this.props
        if (focused || mouseIn) {
            const newList = list.toJS();
            let searchInfoList = [];

            for (let i = currentPage * constants.TOPICS_PER_PAGE; i < (currentPage + 1) * constants.TOPICS_PER_PAGE; i++) {
                if (newList[i])
                    searchInfoList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }

            return (
                <SearchInfo
                    onMouseEnter={hotTopicMouseIn}
                    onMouseLeave={hotTopicMouseOut}
                >
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={() => switchPage(currentPage, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchInfoList>
                            {searchInfoList}
                        </SearchInfoList>
                    </div>
                </SearchInfo>
            )
        }
    }

    userState() {
        const {login} = this.props;
        if (login) {
            return (
                <Link to={'/user/1'}>
                    <Avatar size={40} icon="user"/>
                </Link>
            )
        } else {
            return <span>登录</span>
        }
    }

    notImplemented() {
        message.warning("此功能暂未开放");
    }

    render() {
        const {hideHeader, focused, list, searchBarFocused, searchBarBlur, login} = this.props;
        if (hideHeader) return '';
        return(
            <HeaderWrapper>
                <Link to={'/'}><Logo/></Link>
                <Nav>
                    <Link to='/'><NavItem className='left active'>首页</NavItem></Link>
                    <NavItem className='left' onClick={this.notImplemented}>下载App</NavItem>
                    <NavItem className='right' onClick={this.toggleLogin.bind(this)}>{this.userState()}</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {
                                    searchBarFocused(list)
                                }}
                                onBlur={searchBarBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</i>
                        {this.showHotTopic(focused)}
                    </SearchWrapper>
                    <Addition>
                        {login
                            ? (
                                <Link to={'/compose'}>
                            <Button className='reg'><i className='iconfont'>&#xe615;</i>写文章</Button>
                                </Link>
                            )
                            : ''
                        }
                        {!login
                            ? <Button className='writing' onClick={this.notImplemented}>注册</Button>
                            : ''
                        }
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

    toggleLogin() {
        if (this.props.login) {
            this.props.logout();
        } else {
            window.location = '/login';
        }
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        currentPage: state.getIn(['header', 'currentPage']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login']),
        hideHeader: state.getIn(['login', 'hideHeader']),
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        searchBarFocused(list) {
            (list.size === 0) && dispatch(actionCreators.getHotTopics());
            dispatch(actionCreators.searchBarFocusAction());
        },

        searchBarBlur(){
            dispatch(actionCreators.searchBarBlurAction());
        },

        hotTopicMouseIn() {
            dispatch(actionCreators.hotTopicMouseInAction());
        },

        hotTopicMouseOut() {
            dispatch(actionCreators.hotTopicMouseOutAction());
        },
        switchPage(currentPage, totalPage, spin) {
            let previousAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            let nextAngle = 360;
            if (previousAngle) {
                nextAngle = parseInt(previousAngle, 10) + 360;
            }
            spin.style.transform = `rotate(${nextAngle}deg)`;
            if (currentPage === totalPage - 1) {
                dispatch(actionCreators.switchPageAction(0));
            } else {
                dispatch(actionCreators.switchPageAction(currentPage + 1));
            }
        },

        logout() {
            dispatch(loginActionCreators.logout());
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);