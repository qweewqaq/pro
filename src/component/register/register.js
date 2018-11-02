import React from "react"
import Logo from "../logo/logo"
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from "antd-mobile"
import {connect} from "react-redux"
import {register} from "../../redux/action/user"
import "../../index.css"
@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:"",
            pwd:"",
            repeatpwd:"",
            type:"genius"
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    render(){
        let RadioItem = Radio.RadioItem
        return (
            <div>
            <Logo/>
                <List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:""}
                    <InputItem onChange={a=>this.handleChange("user",a)}>用户</InputItem>
                    <WhiteSpace/>
                    <InputItem onChange={a=>this.handleChange("pwd",a)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem onChange={a=>this.handleChange("repeatpwd",a)}>确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem
                        onChange={()=>this.handleChange("type","genius")}
                        checked={this.state.type=="genius"}
                    >牛人
                    </RadioItem>
                    <RadioItem
                        onChange={()=>this.handleChange("type","boss")}
                        checked={this.state.type=="boss"}
                    >boss
                    </RadioItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick ={this.handleRegister}>注册</Button>
                </List>
            </div>
        )
    }
    handleRegister(){
        this.props.register(this.state)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
}
export default Register