import {AUTH_SUCCESS, ERROR_MSG, LOAD_DATA, LOGOUT} from "../constant/constant"
import axios from "axios"

export const login = ({user,pwd})=>{
    if(!user||!pwd){
        return errorMsg("用户密码必须输入")
    }
    return dispatch=>{
        axios.post("/user/login",{user,pwd})
            .then(res=>{
                if(res.status==200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export const logoutSubmit=()=>{
    return {type:LOGOUT}
}
const authSuccess=(obj)=>{
    const {pwd,...data}=obj
    return {type:AUTH_SUCCESS,payload:data}
}
export const update=(data)=>{
    return dispatch=>{
        axios.post("/user/update",data)
            .then(res=>{
                if(res.status==200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export const loadData=(userinfo)=>{
    return{
        type:LOAD_DATA,payload:userinfo
    }
}
const errorMsg= (msg)=>{
    return {
        msg,
        type:ERROR_MSG
    }
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
                    dispatch(authSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}