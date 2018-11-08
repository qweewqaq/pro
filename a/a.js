var express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const userRouter = require("./user")
var ap = express()
const server =require("http").Server(ap)
const io =require("socket.io")(server)
const model=require("./model")
const Chat=model.getModel("chat")
io.on("connection",function (socket) {
    socket.on("sendmsg",function (data) {
        const {from,to,msg} =data
        const chatid =[from,to].sort().join("_")
        Chat.create({chatid,from,to,content:msg},function (e,d) {
            console.log(d)
            io.emit("recvmsg",Object.assign({},d._doc))
        })
    })
})
ap.use(cookieParser())
ap.use(bodyParser.json())
ap.use("/user",userRouter)
server.listen("9093",function () {
    console.log("a")
})