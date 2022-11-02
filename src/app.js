import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes";
import userssRoutes from "./routes/users.routes";
import {connectdb} from "./db";

const mdb =connectdb();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/products", productsRoutes);
app.use("/users", userssRoutes);

export { app , mdb };
