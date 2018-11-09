import {MSG_LIST, MSG_READ, MSG_RECV} from "../constant/constant";

const initState={
    chatmsg:[],
    users:{},
    unread:0
}
export const chat=(state=initState,action)=>{
    switch (action.type) {
        case MSG_LIST:
            return {...state,chatmsg:action.payload.msgs,users:action.payload.users,unread:action.payload.msgs.filter(v=>!v.read&&v.to==action.payload.userid).length}
            break;
        case MSG_RECV:
            const a = action.payload.to==action.userid?1:0
            return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+a}
            break;
        case MSG_READ:
            const {from,num}=action.payload
            return {...state,chatmsg:state.chatmsg.map(v=>({...v,read:from==v.from?true:v.read})),unread:state.unread-action.payload.num}
            break
        default:
            return state
    }
}