require('dotenv').config();
const {
    DB_URI
} = process.env;

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const { application } = require('express');
const app= express();
const port=process.env.PORT||3000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));


// connecting to database

mongoose.connect(`mongodb://localhost:27017/e-learning`,{
    
   useNewUrlParser : true,
   useUnifiedTopology : true,
//    useFindAndModify : true,
//    useCreateIndex : true,
})
.then(()=>console.log("connected to e-learning database")).catch((error)=>
   console.log(error.message));

//routes prefix

app.use("/",require('../routes/routes'));
//start server

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
console.log(process.env.DB_URI);