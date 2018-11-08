import {combineReducers} from "redux"
import {user} from "./user"
import {chatuser} from "./chatuser"
import {chat} from "./chat"

export const reduce = combineReducers({
    user,chatuser,chat
})