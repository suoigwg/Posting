import React, {Component} from 'react';
import {connect} from "react-redux";
import {Addition, HeaderWrapper, MyButton, Nav, NavItem} from "./style";
import * as actionCreators from './store/actionCreaters'
import {Link} from "react-router-dom";
import {AutoComplete, Avatar, Button, Icon, Input, message} from "antd";
import Axios from "axios";
import "./style.scss"

message.config({
    duration: 1,
    maxCount: 2,
});

const Option = AutoComplete.Option;

function onSelect(value) {
    console.log('onSelect', value);
}

const hideHeaderUrl = ['/compose', '/login'];

function renderOption(item) {
    return (
        <Option key={item.id}>
            在文章
            <Link
                to={'/detail/' + item.id}
            >
                {item.title}
            </Link>中出现过
        </Option>
    );
}

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
        this.renderSearch = this.renderSearch.bind(this);
    }

    handleSearch = (value) => {
        if (value === undefined || value.length === 0) return;
        Axios.get(process.env.REACT_APP_API_ROOT + 'search/' + value).then(
            (resp) => {
                console.log(resp.data);
                this.setState({
                    dataSource: resp.data
                });
            }
        ).catch(
            () => message.error("搜索接口获取失败")
        );
        console.log(value);

    };

    renderSearch() {
        const {dataSource} = this.state;
        return (
            <div className="global-search-wrapper" style={{width: 300, paddingTop: 10, display: "inline-block"}}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    style={{width: '100%'}}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="搜索"
                    optionLabelProp="text"
                >
                    <Input
                        suffix={(
                            <Button className="search-btn" size="large" type="primary"
                            >
                                <Icon type="search"/>
                            </Button>
                        )}

                    />
                </AutoComplete>
            </div>
        );
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
            return <Link to={'/login'}>登录</Link>
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
                <Nav>
                    <Link to='/'><NavItem className='left active'>首页</NavItem></Link>
                    <NavItem className='right'>{this.userState()}</NavItem>
                    {this.renderSearch()}
                    <Addition>
                        {login
                            ? (
                                <Link to={'/compose'}>
                                    <MyButton className='reg'><i className='iconfont'>&#xe615;</i>写文章</MyButton>
                                </Link>
                            )
                            : ''
                        }
                        {!login
                            ? <MyButton className='writing' onClick={this.notImplemented}>注册</MyButton>
                            : ''
                        }
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


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);