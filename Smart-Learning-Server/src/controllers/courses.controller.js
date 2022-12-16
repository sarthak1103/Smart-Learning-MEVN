const courses = require('../models/courses');
const Course=require('../models/courses');


module.exports= class course{
    //fetch al courses
    static async fetchAllCourse(req,res){
        try {
            const getCourse= await courses.find();
            res.status(200).json(getCourse);
        } catch (error) {
            res.status(error.code).json(error.message);
        }
    }
  // fetch courses by id

  static async fetchCourseById(req,res){
    res.send("Hello from fetchCourseById")
}

// add course
static async AddCourse(req,res){
    const addCourse= req.body;
    const imageName= req.file.filename;
    addCourse.image= imageName;
    try {
        await courses.create(addCourse);
        res.status(201).json({message:'course added successfully'});
    } catch (error) {
        res.status(400).json({message:'something went wrong'});

    }
}
static async deleteCourse(req,res){
    res.send("Hello from deleteCourse")
}
}