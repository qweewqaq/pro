import {createStore} from "redux"
export function counter(state=0,action) {
    switch (action.type) {
        case"add":
            return state+1
        case"decrease":
            return state-1
        default:return 10
    }
}
const store = createStore(counter)
const init = store.getState()
console.log(init)
store.dispatch({type:"add"})
store.subscribe(()=>{console.log(store.getState())})
export const add=()=>({type:"add"})
export const decrease=()=>({type:"decrease"})
export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}