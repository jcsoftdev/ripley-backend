import express, { Request } from 'express'
import { createUser, getUsers, getAverage } from "../controllers/users"
const router = express.Router();

router.post("/user", createUser);

router.get("/users", getUsers);

// PROMEDIO DE EDAD
router.get("/user/average", getAverage);

export default router