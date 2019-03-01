import React, {Component} from 'react';
import {LoginWrapper, LoginBox, Input, Button} from "./style";
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends Component {
    render() {
        if (!this.props.loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {
                            this.account = input
                        }}/>
                        <Input placeholder='密码' type='password' innerRef={(input) => {
                            this.password = input
                        }}/>
                        <Button onClick={() => {
                            this.props.login(this.account, this.password)
                        }}>登录</Button>
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