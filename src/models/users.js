import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lasttName: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
},{
    timestamps: true,
    versionKey: false
});

export default model("user", userSchema);