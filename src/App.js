import React,{Component} from 'react';
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from "./store/store"
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'
import Composer from './pages/compose/index'

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <div>
                            {/*<Header/>*/}
                            <Route path='/' exact component={Home}/>
                            <Route path='/detail/:id' exact component={Detail}/>
                            <Route path='/login' exact component={Login}/>
                        </div>
                        <Route path='/compose' exact component={Composer}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;