import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo connected to", mongo.connection.name);
  } catch (error) {
    console.log(error);
  }
};
