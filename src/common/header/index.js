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

class Header extends Component{

    showHotTopic(){
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchInfoList>
                            {this.props.list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })}
                        </SearchInfoList>
                    </div>
                </SearchInfo>
            )
        }
    }

    render() {
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
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused?'focused':''}
                                onFocus={this.props.searchBarFocused}
                                onBlur={this.props.searchBarBlur}
                            />
                        </CSSTransition>
                        <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe6e4;</i>
                        {this.showHotTopic(this.props.focused)}
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
        list: state.getIn(['header','list'])
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        searchBarFocused(){
            dispatch(actionCreators.getHotTopics());
            dispatch(actionCreators.searchBarFocusAction());
        },

        searchBarBlur(){
            dispatch(actionCreators.searchBarBlurAction());
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);