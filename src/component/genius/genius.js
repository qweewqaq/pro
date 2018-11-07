import React from "react"
import {getUserList} from "../../redux/action/chatuser";
import {connect} from "react-redux"
import UserCard from "../usercard/usercard";

@connect(
    state=>state.chatuser,
    {getUserList}
)
class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList("genius")
    }
    render(){
        return (
            <UserCard userList={this.props.userList}/>
        )
    }
}
export default Genius