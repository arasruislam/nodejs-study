// External Import
import { Router } from "express";

// Internal Import
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middlwarw.js";
import { upload } from "../middlewares/multer.middleware.js";

// Create Router
const router = Router();

// REGISTER ROUTE
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

// LOGIN ROUTE
router.route("/login").post(loginUser);

// SECURED ROUTES
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

// Export Router
export default router;
