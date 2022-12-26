import axios from "axios";
const url="http://localhost:3000"
export default class API{
    static async getAllCourse(){
        const res= await axios.get(url);
        return res.data;
    }
}



// export const login= async ()=>{
//     const response= await axios.post(
//         `https://localhost:3000/users/login`,
        
//         );
//         console.log(response.data)
//         return response.data
// };