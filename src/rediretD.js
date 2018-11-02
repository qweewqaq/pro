import React from "react"
import {BrowserRouter,Route,Link,Redirect} from "react-router-dom"
import App from "./App"
import Login from "./login"
import {connect} from "react-redux"
import {setLog, setLogin} from "./redux/action/counter";
import {withRouter} from "react-router-dom"
@connect(
    state=>state.loginDat,
    {setLogin,setLog}
)
class RedirectD extends React.Component{
    render(){
        console.log(" ")
        console.log(this.props)
        this.props.login?this.props.history&&this.props.history.push({pathname:"/App"}):this.props.history&&this.props.history.push({pathname:"/Login"})
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="/App">a</Link>
                        <Route path="/App" component={App}/>
                        <Route path="/Login" component={Login}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default RedirectD
