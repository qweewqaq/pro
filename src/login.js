import React from "react"
import {Button} from "antd-mobile"
import {connect} from "react-redux"
import {setLogin,setLog,getUserData} from "./redux/action/counter";
import {withRouter} from "react-router-dom"
import {bindActionCreators} from "redux";
import axios from "axios"

@connect(
    state=>state.loginDat,
    {setLogin,setLog,getUserData}

)

class Login extends React.Component{

    componentDidMount(){
        this.props.getUserData()
    }
    render(){
        console.log(this.props)
        this.props.login&&(this.props.history&&this.props.history.push({pathname:"/App"}))
        return (
            <div>
                <div>{this.props.userName}</div>
                <Button className="primary" onClick = {this.props.setLogin}>login</Button>
            </div>
        )
    }

}
666666
export default withRouter(Login)