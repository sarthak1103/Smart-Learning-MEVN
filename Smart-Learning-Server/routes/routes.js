const course= require("../src/controllers/courses.controller");
const userController= require("../src/controllers/users.controller");
const express= require('express');
const router=express.Router();

const multer= require('multer');
const { JsonWebTokenError } = require("jsonwebtoken");

//multer middleware

let storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./src/uploads');

    },
    filename:function(req,file,cb){
        cb(null,file.fieldname +"_"+Date.now()+"_"+file.originalname);
    },

});
 
let uploadCourse=multer({
    storage:storage,
}).single("image"); 

router.get('/',course.fetchAllCourse);
router.get('/:id',course.fetchCourseById);
router.get("/users/:username",userController.getAllUsers);
router.post('/addCourse',uploadCourse,course.AddCourse);
router.delete('/:id',course.deleteCourse);
router.post("/register",userController.register);
router.post("/login",userController.login);

module.exports=router;