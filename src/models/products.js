import { Schema, model } from "mongoose";

const productSchema = new Schema({
  serial: { type: String, required: true },
  warranty: { type: Number, required: true },
  client: { type: String, required: true },
},{
    timestamps: true,
    versionKey: false
});

export default model("product", productSchema);
