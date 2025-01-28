// External Import
import { Router } from "express";

// Internal Import
import { registerUser } from "../controllers/user.controller.js";

// Create Router
const router = Router();

// route
router.route("/register").post(registerUser);

// Export Router
export default router;
