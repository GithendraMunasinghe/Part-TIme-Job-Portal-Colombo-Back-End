import { Router } from "express";
import { createUser, getAllUsers, getUserById } from "../controllers/userController.js";

const router = Router()

router.post('/register', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)

export default router;