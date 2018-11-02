import React from "react"
import Logo from "../logo/logo"
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from "antd-mobile"
class Register extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.state={
            type:"genius"
        }
    }
    render(){
        let RadioItem = Radio.RadioItem
        return (
            <div>
            <Logo/>
                <List>
                    <InputItem>用户</InputItem>
                    <WhiteSpace/>
                    <InputItem>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type=="genius"}>牛人</RadioItem>
                    <RadioItem checked={this.state.type=="boss"}>boss</RadioItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick ={this.register}>注册</Button>
                </List>
            </div>
        )
    }
    register(){
        this.props.history.push("/register")
    }
}
export default Register