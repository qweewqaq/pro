import {AUTH_SUCCESS, ERROR_MSG, LOAD_DATA} from "../constant/constant";
import {getRedirectPat} from "../uti";
const initState={
    redirectTo:"",
    isAuth:false,
    msg:"",
    user:"",
    type:""
}
export const user =(state=initState,action)=>{
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state,msg:"",redirectTo:getRedirectPat(action.payload),...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
                return state
    }
}
