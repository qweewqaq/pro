import {ERROR_MSG, LOAD_DATA, LOGIN_SUCCESS, REGISTER_SUCCESS} from "../constant/constant";
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
        case REGISTER_SUCCESS:
            return {...state,msg:"",redirectTo:getRedirectPat(action.payload),isAuth:true,...action.payload}
        case LOGIN_SUCCESS:
            return {...state,msg:"",redirectTo:getRedirectPat(action.payload)}
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
                return state
    }
}
