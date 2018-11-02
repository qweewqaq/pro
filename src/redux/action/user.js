import {ERROR_MSG, REGISTER_SUCCESS,} from "../constant/constant"
import axios from "axios"
const errorMsg= (msg)=>{
    return {
        msg,
        type:ERROR_MSG
    }
}
const registerSuccess = (data)=>{
    return {type:REGISTER_SUCCESS,payload:data}
}
export const register = ({user,pwd,repeatpwd,type})=>{
    if(!user||!pwd||!type){
        return errorMsg("用户名密码必须输入")
    }
    if(pwd!==repeatpwd){
        return errorMsg("密码和确认密码不同")
    }
    return dispatch=>{
        axios.post("/user/register",{user,pwd,type})
            .then(res=>{
                if(res.status==200&&res.data.code===0){
                    dispatch(registerSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}