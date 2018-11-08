import React from "react"
import {connect} from "react-redux"
import {NavBar} from "antd-mobile"
import NavLinkBar from "../navlink/navlink"
import {Switch,Route} from "react-router-dom"
import Boss from "../boss/boss"
import Genius from "../genius/genius"
import {User} from "../user/user";
import Chat from "../chat/chat"
import {getMegList,sendMsg,recvMsg} from "../../redux/action/chat";
@connect(
    state=>state,
    {getMegList,recvMsg}
)
class Dashboard extends React.Component{
    render(){
        const pathname=this.props.location.pathname
        const user=this.props.user
        const navList=[
            {
                path:"/boss",
                text:"牛人",
                icon:"boss",
                title:"牛人列表",
                component:Genius,
                hide:user.type=="genius"
            },
            {
                path:"/genius",
                text:"boss",
                icon:"job",
                title:"BOSS列表",
                component:Boss,
                hide:user.type=="boss"
            },
            {
                path:"/msg",
                text:"消息",
                icon:"msg",
                title:"消息列表",
                component:Chat
            },
            {
                path:"/me",
                text:"我",
                icon:"user",
                title:"个人中心",
                component:User
            }
        ]
        return (
            <div>
                <NavBar className="fixd-header" mode="dark">{navList.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:35}}>
                    <Switch>
                        {navList.map(v=>{
                           return <Route key={v.path} path={v.path} component={v.component}/>
                        })}
                    </Switch>
                </div>

                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getMegList()
            this.props.recvMsg()
        }
    }
}
export default Dashboard