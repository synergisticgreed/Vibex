import express from"express";
import { login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/login",login)

router.post("/logout", logout)

router.put("/update-profile", protectRoute,  updateProfile)   //if user is authenticated then only they can change profile pic
                              //here protectRoute is a middleware, which checks that user is authentiacted or not
export default router;