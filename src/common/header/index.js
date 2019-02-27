import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";
import {CSSTransition} from 'react-transition-group'
import * as actionCreators from './store/actionCreaters'
import {constants} from "./store";

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

    render() {
        const {focused, list, searchBarFocused, searchBarBlur} = this.props;
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left '>下载App</NavItem>
                    <NavItem className='right '>登录</NavItem>
                    <NavItem className='right '><i className='iconfont'>&#xe636;</i></NavItem>
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
                        <Button className='reg'><i className='iconfont'>&#xe615;</i>写文章</Button>
                        <Button className='writing'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }


}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        currentPage: state.getIn(['header', 'currentPage']),
        totalPage: state.getIn(['header', 'totalPage']),

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
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);