const express=require('express')
const multer=require('multer')

const app=express()


//the upload middleware
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb){
            cb(null,"./uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.filename+".jpg")
        }
    })
})

app.post('/upload',upload.single("image"),(req,res)=>{
// console.log(req.file)
res.send(" file uploaded")
})

app.listen(8000,()=>{
    console.log("your server is running on port 8000")
})