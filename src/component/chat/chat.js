import React from "react"
import {List,InputItem,NavBar,Icon,Grid} from "antd-mobile"
import io from "socket.io-client"
import {connect} from "react-redux"
import {getMegList,sendMsg,recvMsg,readMsg} from "../../redux/action/chat";
import {getChatId} from "../../redux/ut";

const socket = io("ws://localhost:9093")

@connect(
    state=>state,
    {getMegList,sendMsg,recvMsg,readMsg}
)
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={text:"",msg:[],show:false}
    }
    fixrousel(){
        setTimeout(function () {
            window.dispatchEvent(new Event("resize"))
        })
    }
    render(){
        const emoji="😁 a a a a a a a a a a a a a a a a a a a a a a a a a a a a"
            .split(" ")
            .filter(v=>v)
            .map(v=>({text:v}))
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
                    const avatar= require(`../img/${users[v.from].avatar}.png`)
                    return v.from==userid?(
                        <List key={v._id}>
                            <List.Item
                                thumb={avatar}
                            >{v.content}</List.Item>
                        </List>
                        ) :(
                        <List key={v._id}>
                            <List.Item
                                extra={<img src={avatar}/>}
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
                               extra={
                                   <div>
                                       <span
                                           style={{marginRight:15}}
                                           onClick={()=>{
                                           this.setState({show:!this.state.show})
                                           this.fixrousel()
                                           }}
                                           >😁</span>
                                       <span onClick={()=>{this.handleSubmit()}}>发送</span>
                                   </div>}>
                    </InputItem>
                </List>
                {this.state.show?<Grid
                    data={emoji}
                    columnNum={9}
                    carouselMaxRow={3}
                    isCarousel={true} onClick={v=>{
                        this.setState({text:this.state.text+v.text})
                }}
                />:""}

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
    componentWillUnmount(){
        const to =this.props.match.params.user
        this.props.readMsg(to)
    }
    handleSubmit(){
        console.log(this.state.text)
        const from =this.props.user._id
        const to =this.props.match.params.user
        const msg=this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({text:""})
    }
}
export default Chat