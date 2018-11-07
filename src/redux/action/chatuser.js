import {USER_LIST} from "../constant/constant";
import axios from "axios/index";

 const userList=(data)=>{
    return {type:USER_LIST,payload:data}
}
export const getUserList =(type)=>{
    return dispatch=>{
        axios.get("/user/list?type="+type)
            .then(res=>{
                if(res.data.code==0){
                    dispatch(userList(res.data.data))
                }
            })
    }
}