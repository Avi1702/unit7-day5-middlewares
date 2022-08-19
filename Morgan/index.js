

const express=require("express")
const morgan=require('morgan')
const app=express()


app.use(morgan(" Method-:method URL-:url HTTP_Version-:http-version Status-:status Content_Length-:res[content-length] User_Agent-:user-agent"))


app.get('/',(req,res)=>{

    res.send("home page")
})


app.listen('8080',()=>{
    console.log("running port 8080")
})

