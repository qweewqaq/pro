var express = require("express")
var ap = express()
var mongoose = require("mongoose")
var DB_URL = "mongodb://localhost:27017/imooc"
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function () {
    console.log("connect")
})
const user = mongoose.model("user",new mongoose.Schema({
    user:{type:String, require:true},
    age:{type:Number,require:true}
}))
user.update({user:"xiao"},{"$set":{age:26}},function (err,doc) {
    console.log(doc)
})
user.create({
    name:"imooc",
    age:18
},function (err,doc) {
    if(!err){
        console.log(doc)
    }else {
        console.log(err)
    }
})
user.remove({age:18},function (err,doc) {
    console.log(doc)
})

ap.get("/",(req,res)=>{
    res.send("a")
})
ap.get("/data",(req,res)=>{
    user.find({},function (err,doc) {
        return res.json(doc)
    })
})
ap.get("/")
ap.listen("9093",function () {
    console.log("a")
})