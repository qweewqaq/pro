import {MSG_LIST, MSG_READ, MSG_RECV} from "../constant/constant";

const initState={
    chatmsg:[],
    users:{},
    unread:0
}
export const chat=(state=initState,action)=>{
    switch (action.type) {
        case MSG_LIST:
            return {...state,chatmsg:action.payload.msgs,users:action.payload.users,unread:action.payload.msgs.filter(v=>!v.read).length}
        case MSG_RECV:
            return {...state,chatmsg:[...state.chatmsg,action.payload.msgs],unread:state.unread+1}
        case MSG_READ:
        default:
            return state
    }
}