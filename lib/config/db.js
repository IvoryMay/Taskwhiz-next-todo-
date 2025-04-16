import mongoose from "mongoose";

export const ConnectDB =async () => {
  await mongoose.connect("mongodb+srv://theint:794070456@cluster0.iwrrofz.mongodb.net/?retryWrites=true&w=majority&appName=todo-app");
  console.log("Connected to DB");
};