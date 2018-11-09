import React from "react"
import {connect} from "react-redux"
import {List,Badge} from "antd-mobile"
@connect(
    state=>state
)
class Msg extends React.Component{
    render(){
        const msgGroup={}
        this.props.chat.chatmsg.forEach(v=>{
            msgGroup[v.chatid]=msgGroup[v.chatid]||new Array()
            msgGroup[v.chatid].push(v)
        })
        const userid=this.props.user._id
        const chatList =Object.values(msgGroup).sort((a,b)=>{
            const a_last=this.getLast(a)
            const b_last=this.getLast(b)
            return b_last-a_last
        })
        console.log(chatList)
        const userinfo=this.props.chat.users
        return (
            <div>
                <List>
                    {chatList.map(v=>{
                        const lastItem =this.getLast(v)
                        const targetId=v[0].from==userid?v[0].to:v[0].from
                        const name=userinfo[targetId]?userinfo[targetId].name:""
                        const avatar=userinfo[targetId]?userinfo[targetId].avatar:""
                        const unreadNum=v.filter(v=>!v.read&&v.to==userid).length
                        return ( 
                            <List.Item key={lastItem._id}
                                       thumb={require(`../img/${avatar}.png`)}
                                       extra={<Badge text={unreadNum}></Badge>    }
                                       arrow="horizontal"
                                       onClick={()=>{this.props.history.push(`/chat/${targetId}`)}}>
                                {lastItem.content}
                                <List.Item.Brief>
                                    {name}
                                </List.Item.Brief>
                            </List.Item>
                        )
                    }
                    )}
                </List>
            </div>
        )
    }
    getLast(arr){
        return arr[arr.length-1]
    }
}
export default Msg