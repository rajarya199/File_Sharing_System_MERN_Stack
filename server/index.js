import express from "express"
import router from "./routes/route.js";
import cors from 'cors'
const app=express()

app.use(cors())  // use cors before routing
app.use('/',router)
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})