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

export  const getUsers  = async ()=>{
    try {

        let response=  axios.get(`${URL}/users`)
        return (await response).data;
    }catch (e){
        console.log("Error while calling getUsers Api",e)
    }
}