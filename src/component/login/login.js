import React from "react"
import Logo from "../logo/logo"
import {List,InputItem,WingBlank,WhiteSpace,Button} from "antd-mobile"
class Login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    render(){
        return (
            <div>
                <Logo/>
                <div>登录</div>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick ={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
    register(){
        this.props.history.push("/register")
    }
}
export default Login