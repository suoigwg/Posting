import React,{Component} from 'react';
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from "./store/store"
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/home/index'
import Detail from './pages/detail/index'


class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail' exact component={Detail}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;