import express, { Request } from 'express'
import { createUser, getUsers, getAverage } from "../controllers/users"
const router = express.Router();

router.post("/user", createUser);

router.get("/users", getUsers);

// PROMEDIO DE EDAD
router.get("/user/average", getAverage);
router.get("/user/average",(r: Request<{}>,q)=>{console.log(r,q)});
export default router