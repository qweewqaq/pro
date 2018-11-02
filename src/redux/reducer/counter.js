import {addG,decreaseG} from "../constant/constant.js"
export const counter=(state=0,action)=>{
    switch (action.type) {
        case addG:
            return state+1
        case decreaseG:
            return state-1
        default:return 10
    }
}