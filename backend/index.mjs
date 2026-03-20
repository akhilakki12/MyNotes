import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { mongourl, PORT} from "./config.mjs";
import router from "./src/routes/userRoutes.mjs";


const app=express();
app.use(express.json());
app.use(cors());
console.log(mongourl);
mongoose.connect(mongourl).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});
app.use('/',router);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});