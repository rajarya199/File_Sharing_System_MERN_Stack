import mongoose from "mongoose";
const dbConnection= async()=>{
    try{
       await mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("Connected to database")
    } 
    catch(error){
        console.log.error("Error while connecting to database",error.message)
    }
}
export default dbConnection;