import {addG,decreaseG,login,log} from "../constant/constant.js"
import {USER_DATA} from "../constant/constant";
import axios from "axios/index";
import "../../config"
export const add =()=>{
    return {
        type:addG
    }
};export const decrease = ()=>{
    return {
        type:decreaseG
    }
}
export const setLogin = ()=>{
    return {
        type:login
    }
}
export const setLog = ()=>{
    return {
        type:log
    }
}
export function getUserData() {
    return dispatch=>{
        axios.get("/data").then(res=>{
            console.log(res)
            dispatch({type:USER_DATA,data:res.data[0]})
        })
    }
}