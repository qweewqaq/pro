import {login, log, USER_DATA} from "../constant/constant"
import axios from "axios"
const initialState={
    userName:"aa",login:false,age:0
}
export const loginDat = (state=initialState,action)=>{
    console.log(state)
    switch (action.type) {
        case login :
            return {
                ...state,
                login:true
            }
        case log:
            return {
                ...state,
                login:false
            }
        case USER_DATA:
            return{
                ...state,
                ...action.data
            }
        default:
            return state

    }
}
