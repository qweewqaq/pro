import {ERROR_MSG, REGISTER_SUCCESS} from "../constant/constant";
import {getRedirectPat} from "../uti";
const initState={
    redirectTo:"",
    isAuth:false,
    msg:"",
    user:"",
    pwd:"",
    type:""
}
export const user =(state=initState,action)=>{
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state,msg:"",redirectTo:getRedirectPat(action.payload),isAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
                return state
    }
}
