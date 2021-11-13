import  axios from "axios";

const  URL=`http://localhost:8000`;


// functions
export  const addUser= async (data)=>{
     try {

      return  await  axios.post(`${URL}/add`,data)
     }catch (e){
        console.log("Error while fetching",e)
     }
}