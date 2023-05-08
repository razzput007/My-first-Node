const express=require('express')

const app=express();

//MiddleWare
// app.use('/add-product',(req,res,next)=>{
//     console.log("hello middleware2")
//     res.send(`hello middleware2`)
   
// })

// app.use('/',(req,res,next)=>{
//     console.log("hello middleware1")
//     res.send(`hello Middleware1`)
     
// })




app.listen(5000);
