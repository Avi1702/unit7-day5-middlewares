


const express=require("express")

const app=express()
 app.use(express.json())

const PORT=3002

const movies=[]
const required=["name","rating","description","genre","cast"]


function check(req,res,next){
     
    
        // if the length of incoming boject is not equal to the required array then it means propetires are unequal
        if(Object.keys(req.body).length!==required.length){
            return res.status(400).send("You are missing some property")
        }

        // if the legth of incoming object and the requiered array is equal then check is every property is equal to required property
        for(let k in req.body){
            if(!required.includes(k)){
                return res.status(400).send("Your properties are diffrent from the required properties")
            }

       //if every property is correct then check for the values are the undefined or null 
        if(req.body[k]===""){
            
               return res.status(400).send("Some of the property is undefined or it is null")
            }
        }
       
        next()
      
}

app.use(express.json())



app.get("/",(req,res)=>{
  return  res.send(movies)
 
})


app.use(check)

app.post("/movie",(req,res)=>{
    
    // retrieving the incoming object
    let {name,description,rating,genre,cast}=req.body

    // finding the maximum so that we can use it to provide new id for next data
    let max=0
    if(movies.lenght===0){
        max=1
    }
    else{
    movies.forEach(movie=>{
        max=Math.max(max,movie.id)
    })
      }

    //   wrapping up the data in data variable

    let data={
        id:max+1,
        name:name,
        description:description,
        rating:rating,
        genre:genre,
        cast:cast
    }
    
    // finally push the data in the movies array
    movies.push(data)
  return  res.send("movie added successfully")


})

app.listen(PORT,()=>{
    console.log(`port ${PORT} is running`)
})