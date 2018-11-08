import React from "react"
import Logo from "../logo/logo"
import {List,InputItem,WingBlank,WhiteSpace,Button} from "antd-mobile"

import {login} from "../../redux/action/user.js"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import iForm from "../i-form/i-form"
@connect(
    state=>state.user,
    {login}
)
@iForm
class Login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    render(){
        return (
            <div>{this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:""}
                <Logo/>
                <div>登录</div>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="error-msg">{this.props.msg}</p>:"" }
                        <InputItem onChange={this.props.handleChange.bind(this,"user")}>用户</InputItem>
                        <InputItem onChange={this.props.handleChange.bind(this,"pwd")}>密码</InputItem>
                    </List>
                    <Button onClick={this.handleLogin} type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick ={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
    handleLogin(){
        this.props.login(this.props.state)
    }
    register(){
        this.props.history.push("/register")
    }
}
export default Login