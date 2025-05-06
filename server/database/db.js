import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnection= async()=>{
    const MONGODB_URI=process.env.MONGO_URI
    // const MONGODB_URI=`mongodb+srv://user-rajan:raj3user@file-sharings.ux1yj21.mongodb.net/?retryWrites=true&w=majority&appName=file-sharings`
    try{
       await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
        console.log("Connected to database")
    } 
    catch(error){
        console.error("Error while connecting to database",error.message)
    }
}
export default dbConnection;