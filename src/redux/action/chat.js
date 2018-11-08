import axios from "axios"
import io from "socket.io-client"
import {MSG_LIST, MSG_READ, MSG_RECV} from "../constant/constant";
const socket = io("ws://localhost:9093")


function msgList(msgs,users) {
    return {type:MSG_LIST,payload:{msgs,users}}
}
function msgRecv(msg) {
    return {type:MSG_RECV,payload:msg}
}
export function recvMsg() {
    return dispatch=>{
        socket.on("recvmsg",function (data) {
            dispatch(msgRecv(data))
        })
    }
}
export function sendMsg({from,to,msg}) {
    return dispatch=>{
        socket.emit("sendmsg",{from,to,msg})
    }
}
export function getMegList() {
    return dispatch=>{
        axios.get("/user/getmsglist")
            .then(res=>{
                if(res.status==200&&res.data.code===0){
                    dispatch(msgList(res.data.msgs,res.data.users))
                }else{

                }
            })
    }
}