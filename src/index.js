import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"
import {configureStore} from "./redux/store/store";
import {BrowserRouter,Route} from "react-router-dom"

import Login from "./component/login/login"
import Register from "./component/register/register"
import AuthRoute from "./component/AuthRoute/AuthRoute";
let store = configureStore()

ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
        <div>
            <AuthRoute/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </div>
    </BrowserRouter>
    </Provider>,
    document.getElementById("root"))

