import { Router } from "express";
import { users } from "../controllers/users.controller";


const router = Router();

router.get("/", users.getUsers);

router.post("/", users.postUser ); 

router.get("/:id", users.getUser);

router.put("/:id", users.putUser);

router.delete("/:id", users.deleteUser );

export default router;