import {combineReducers} from "redux"
import {counter} from "./counter.js"
import {loginDat} from "./login";

export const reduce = combineReducers({
    counter,
    loginDat
})