import axios from "axios";
const url="http://localhost:3000"
export default class API{
    static async getAllCourse(){
        const res= await axios.get(url);
        return res.data;
    }
}