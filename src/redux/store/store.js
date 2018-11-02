import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import {reduce} from "../reducer/reduce";

export const configureStore = ()=>{
    let store = createStore(reduce,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():""))
    return store
}