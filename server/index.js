import express from "express"
import router from "./routes/route.js";
import cors from 'cors'
import dbConnection from "./database/db.js";
const app=express()
import dotenv from 'dotenv'
dotenv.config();

app.use(cors())  // use cors before routing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router)

const PORT = process.env.PORT 
dbConnection()
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})