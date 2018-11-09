export function createStore(reducer) {
    let currentState={}
    let currentListeners=[]
    function getState() {
        return currentState
    }
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    function dispatch(action) {
        currentState=reducer(currentState,action)
        currentListeners.forEach(v=>v())
    }
    dispatch({type:""})
    return {getState,subscribe,dispatch}
}

function add(state,action) {
    switch(action.type){
        case "a":
            return state+1
        case "d":
            return state-1
        default:
            return 10

    }
}
let store=createStore(add)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({type:"a"})