const express= require('express');
const router=express.Router();
const course= require("../src/controllers/courses.controller");
const multer= require('multer');
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
router.post('/addCourse',uploadCourse,course.AddCourse);
router.delete('/:id',course.deleteCourse);

module.exports=router;