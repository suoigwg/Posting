import React, {Component} from 'react';
import {Button, CenterDiv, Input, Label, LabelWrapper, LoginBox, LoginForm, LoginWrapper} from "./style";
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {message} from "antd";

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        if (!this.props.loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LabelWrapper>
                            <div>
                                <Label>登录</Label>
                                <b>·</b>
                                <Label onClick={() => message.warn("此功能未开放")}>注册</Label>
                            </div>
                        </LabelWrapper>
                        <CenterDiv>
                            <LoginForm onSubmit={this.handleSubmit} id={'loginForm'} method={'POST'}
                                       action={process.env.REACT_APP_API_ROOT + 'login'}>
                                <Input name={'username'} placeholder='手机号或邮箱'/>
                                <Input name={'password'} placeholder='密码' type='password'/>
                            </LoginForm>
                            <Button type={'submit'} form={'loginForm'}>登录</Button>
                        </CenterDiv>
                        <p>账号 demoAccount 密码 123456</p>


                    </LoginBox>
                </LoginWrapper>

            )
        } else {
            return <Redirect to='/'/>;
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        this.props.login(username, password);
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
            dispatch(actionCreators.authenticate(username, password));
        },
        toggleHeader(visibility) {
            dispatch(actionCreators.toggleHeader(visibility));
        }

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);