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
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        if (!this.props.loginState) {
            return (
                <LoginWrapper>
                    <LogoWrapper>
                        <a href={'/'}><img src={logoImg}/></a>
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
                            <LoginForm onSubmit={this.handleSubmit} id={'loginForm'} method={'POST'}
                                       action={'http://localhost:8000/login'}>
                                <Input name={'username'} placeholder='手机号或邮箱'/>
                                <Input name={'password'} placeholder='密码' type='password'/>
                            </LoginForm>
                            <Button type={'submit'} form={'loginForm'}>登录</Button>
                        </CenterDiv>


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