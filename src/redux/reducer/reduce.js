import {combineReducers} from "redux"
import {user} from "./user"
import {chatuser} from "./chatuser"

export const reduce = combineReducers({
    user,chatuser
})