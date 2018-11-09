import axios from "axios"
import io from "socket.io-client"
import {MSG_LIST, MSG_READ, MSG_RECV} from "../constant/constant";
const socket = io("ws://localhost:9093")


function msgList(msgs,users,userid) {
    return {type:MSG_LIST,payload:{msgs,users,userid}}
}
function msgRecv(msg,userid) {
    return {type:MSG_RECV,payload:msg,userid}
}
function msgRead({from,userid,num}) {
    return {type:MSG_READ,payload:{from,userid,num}}
}
export function recvMsg() {
    return (dispatch,getState)=>{
        socket.on("recvmsg",function (data) {
            const userid=getState().user._id
            dispatch(msgRecv(data,userid))
        })
    }
}
export function readMsg(from) {
    return (dispatch,getState)=>{
        axios.post("/user/readmsg",{from})
            .then(res=>{
                const userid=getState().user._id
                if(res.status==200&&res.data.code==0){
                    dispatch(msgRead({userid,from,num:res.data.n}))
                }
            })
    }
}
export function sendMsg({from,to,msg}) {
    return dispatch=>{
        socket.emit("sendmsg",{from,to,msg})
    }
}
export function getMegList() {
    return (dispatch,getState)=>{
        axios.get("/user/getmsglist")
            .then(res=>{
                if(res.status==200&&res.data.code===0){


                    const userid=getState().user._id
                    dispatch(msgList(res.data.msgs,res.data.users,userid))
                }else{

                }
            })
    }
}