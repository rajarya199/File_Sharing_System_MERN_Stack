import express from "express"
import router from "./routes/route.js";
const app=express()

app.use('/',router)
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})