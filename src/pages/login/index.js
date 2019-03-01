import React, {Component, Fragment} from 'react';
import {
    Remember,
    CenterDiv,
    LoginForm,
    Label,
    LabelWrapper,
    LogoWrapper,
    Logo,
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from "./style";
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import logoImg from '../../statics/imgs/logo_big.png'
class Login extends Component {
    render() {
        if (!this.props.loginState) {
            return (
                <LoginWrapper>
                    <LogoWrapper>
                        <a><img src={logoImg}/></a>
                    </LogoWrapper>
                    <LoginBox>
                        <LabelWrapper>
                            <div>
                                <Label>登录</Label>
                                <b>·</b>
                                <Label>注册</Label>
                            </div>
                        </LabelWrapper>
                        <CenterDiv>
                            <LoginForm>
                                <Input placeholder='手机号或邮箱' innerRef={(input) => {
                                    this.account = input
                                }}/>
                                <Input placeholder='密码' type='password' innerRef={(input) => {
                                    this.password = input
                                }}/>
                                <Remember>
                                    <input type='checkbox'/><span>记住我</span>
                                </Remember>
                                <Button onClick={() => {
                                    this.props.login(this.account, this.password)
                                }}>登录</Button>
                            </LoginForm>
                        </CenterDiv>


                    </LoginBox>
                </LoginWrapper>

            )
        } else {
            return <Redirect to='/'/>;
        }

    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        loginState: state.getIn(['login', 'login'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(username, password) {
            console.log("login");
            dispatch(actionCreators.authenticate(username.value, password.value));
        }

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);