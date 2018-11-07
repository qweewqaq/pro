import React from "react"
import {Card,WhiteSpace,WingBlank}  from "antd-mobile"

import {getUserList} from "../../redux/action/chatuser";
import {connect} from "react-redux"
import UserCard from "../usercard/usercard";


@connect(
    state=>state.chatuser,
    {getUserList}
)
class Boss extends React.Component{
    componentDidMount(){
        this.props.getUserList("boss")
    }
    render(){
        return (
            <UserCard userList={this.props.userList}/>
        )
    }
}
export default Boss