import React, {Component} from 'react';
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from "./store/store"
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'
import Composer from './pages/compose/index'
import Profile from './pages/profile/index'
import UserList from './pages/user/index'
import {message} from "antd";

message.config({
    duration: 1,
    maxCount: 2,
});

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div>
                            <Route path='/' exact component={Home}/>
                            <Route path='/detail/:id' exact component={Detail}/>
                            <Route path='/login' exact component={Login}/>
                            <Route path='/userlist' exact component={UserList}/>
                            <Route path='/user/:id' exact component={Profile}/>
                        </div>
                        <Route path='/compose' exact component={Composer}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;