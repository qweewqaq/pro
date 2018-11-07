import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"
import {configureStore} from "./redux/store/store";
import {BrowserRouter,Route,Switch} from "react-router-dom"

import Login from "./component/login/login"
import Register from "./component/register/register"
import AuthRoute from "./component/AuthRoute/AuthRoute";
import BossInfo from "./container/bossinfo/bossinfo"
import GeniusInfo from "./container/geniusinfo/geniusinfo"
import Dashboard from "./component/dashboard/dashboard"
let store = configureStore()
ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
        <div>
            <AuthRoute/>
            <Switch>
            <Route path="/bossinfo" component={BossInfo}/>
            <Route path="/geniusinfo" component={GeniusInfo}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route component={Dashboard}/>
            </Switch>
        </div>
    </BrowserRouter>
    </Provider>,
    document.getElementById("root"))

