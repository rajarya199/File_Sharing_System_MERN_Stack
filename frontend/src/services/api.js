import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL 
export const uploadFile= async(data)=>{
    try{
     let response=await axios.post(`${API_URL}/upload`,data)
     return response.data
    }
    catch(error){
        console.error("error calling the api",error.message)
    }
}