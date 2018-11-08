import React from "react"
import Logo from "../logo/logo"
import {Redirect} from "react-router-dom"
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from "antd-mobile"
import {connect} from "react-redux"
import {register} from "../../redux/action/user"
import "../../index.css"

import iForm from "../i-form/i-form"
@connect(
    state=>state.user,
    {register}
)

@iForm
class Register extends React.Component{
    constructor(props){
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount(){
        this.props.handleChange("type","genius")
    }
    render(){
        let RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:""}
            <Logo/>
                <List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:""}
                    <InputItem onChange={a=>this.props.handleChange("user",a)}>用户</InputItem>
                    <WhiteSpace/>
                    <InputItem onChange={a=>this.props.handleChange("pwd",a)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem onChange={a=>this.props.handleChange("repeatpwd",a)}>确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem
                        onChange={()=>this.props.handleChange("type","genius")}
                        checked={this.props.state.type=="genius"}
                    >牛人
                    </RadioItem>
                    <RadioItem
                        onChange={()=>this.props.handleChange("type","boss")}
                        checked={this.props.state.type=="boss"}
                    >boss
                    </RadioItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick ={this.handleRegister}>注册</Button>
                </List>
            </div>
        )
    }
    handleRegister(){
        this.props.register(this.props.state)
    }
}
export default Register