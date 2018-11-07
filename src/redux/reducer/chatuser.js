import {USER_LIST} from "../constant/constant";
import axios from "axios"

const initState={
    userList:[]
}
export const chatuser=(state=initState,action)=>{
    switch(action.type){
        case USER_LIST:
            return {...state,userList:action.payload}
        default:
            return state
    }
}