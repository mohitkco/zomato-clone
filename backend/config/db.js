import mongoose from "mongoose";

export const  connectDB = async()=>{
    await mongoose.connect('mongodb+srv://MMM:PROJECT2025@cluster0.jbnp9m6.mongodb.net/zomato-clone').then(()=>console.log("db connected"));
}