require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const app=require('express');
const port=process.env.PORT;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));


// connecting to datbase

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser : true,
   useUnifiedTopology : true,
   useFindAndModify : true,
   useCreateIndex : true,
}).then(()=>{
    console.log("connected to e-learning database");
}).catch((error)=>{
   console.log(error.message);
})


//start server

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});