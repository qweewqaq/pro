import axios from "axios"
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

class move{
    constructor(div){
        this.div=document.querySelector("#"+div)
        this.diffX=0
        this.diffY=0
        this.ini=this.ini.bind(this)
    }
    ini(){
        this.div.onmousedown=function (e) {
            this.diffX=e.clientX-this.div.offsetLeft
            this.diffY=e.clientY-this.div.offsetTop
            document.onmousemove=this.moveTo.bind(this)
            document.onmouseout=this.to.bind(this)
        }
    }
    moveTo(e){
        this.div.style.left=e.clientX-this.diffX+"px"
        this.div.style.top=e.clientY-this.diffY+"px"
    }
    to(){
        this.moveTo=null
        this.to=null
    }

}
class movea extends move{
    moveTo(){
        super.moveTo()
    }
}
function getVal() {
    return Promise.resolve(axios.get("/user/info"))
}
function geta() {
    throw new Error("a")
}
var a
async function get() {
    let a = await getVal()

    return a
}
console.log(get().then(res=>{
    console.log(res)
}).catch(e=>{console.log(e)}))

async function getPro() {
    let a =await new Promise(resolve => setTimeout(function () {
        resolve("a")
    },1000))
    return a
}
getPro().then(res=>{
    console.log(res)
})
console.log(+0===-0)
function getVa(a) {
    console.log(arguments)
}
getVa()

let o=/([0-9]+[a-zA-Z]+)(-)/
let p=/a.??/
let s= 'this is a number 23564-235-22-423'

console.log(s.match(/(.+?)\d+-\d+-\d+-\d+/))
console.log(RegExp.$1)
console.log("aaaaa".match(p))
let t="0000a-"
console.log(t.match(o))
if(t.match(o)){
    console.log(RegExp.$1)
}