//request- api req from frnotend (frontend to backend)
//response- api res to frontend (backend to frontend)

import File from "../models/file.js"
import dotenv from 'dotenv';
dotenv.config()
export const uploadImage=async(request,response)=>{
    const fileObj={
        path:request.file.path,
        name:request.file.originalname,
    }
    try{
        const file=await File.create(fileObj)
        console.log(file)
        response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`});
    }
    catch(error){
        console.log("Error while uploading image",error.message)
        return response.status(500).json({message:error.message})
    }
}