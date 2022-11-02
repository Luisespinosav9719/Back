import { Router } from "express";
import { products } from "../controllers/products.controller";


const router = Router();

router.get("/", products.getProducts);

router.post("/", products.postProduct ); 

router.get("/:id", products.getProduct);

router.put("/:id", products.putProduct);

router.delete("/:id", products.deleteProduct );

export default router;