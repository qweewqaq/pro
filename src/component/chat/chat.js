import React from "react"
import {List,InputItem,NavBar,Icon} from "antd-mobile"
import io from "socket.io-client"
import {connect} from "react-redux"
import {getMegList,sendMsg,recvMsg} from "../../redux/action/chat";
import {getChatId} from "../../redux/ut";

const socket = io("ws://localhost:9093")

@connect(
    state=>state,
    {getMegList,sendMsg,recvMsg}
)
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={text:"",msg:[]}
    }
    render(){
        const userid=this.props.match.params.user
        const users=this.props.chat.users
        const chatid = getChatId(userid,this.props.user._id)
        const chatmsgs=this.props.chat.chatmsg.filter(v=>v.chatid==chatid)
        if(!users[userid]){
            return null
        }
        return (
            <div id="chat-page">
                <NavBar mode="dark"
                        icon={<Icon type="left"/>}
                        onLeftClick={this.props.history.goBack}>
                    {users[userid].name}
                </NavBar>


                {chatmsgs.map(v=>{
                    const avatar= require(`../img/${v.from}.png`)
                    return v.from==userid?(
                        <List key={v._id}>
                            <List.Item
                                thumb={avatar}
                            >{v.content}</List.Item>
                        </List>
                        ) :(
                        <List key={v._id}>
                            <List.Item
                                extra={`<img src=../img/${v.to}.png`}
                                className="chat-me"
                            >{v.content}</List.Item>
                        </List>
                )
                })}
            <div className="stick-footer">
                <List>
                    <InputItem placeholder="请输入"
                               value={this.state.text}
                               onChange={v=>{
                                   this.setState({text:v})
                               }}
                               extra={<span onClick={()=>{this.handleSubmit()}}>发送</span>}>
                    </InputItem>
                </List>
            </div>
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getMegList()
            this.props.recvMsg()
        }

    }
    handleSubmit(){
        const from =this.props.user._id
        const to =this.props.match.params.user
        const msg=this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({text:""})
    }
}
export default Chat