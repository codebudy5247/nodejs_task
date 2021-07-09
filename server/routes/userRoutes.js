import express from "express";
const router = express.Router();

import {
  signin,
  signup,
  googleSignup,
  googleSignin,
  facebookSignin,
  facebookSignup,
} from "../controllers/userController.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/auth/google/signup", googleSignup);
router.post("/auth/google/signin", googleSignin);
router.post("/auth/facebook/signup", facebookSignup);
router.post("/auth/facebook/signin", facebookSignin);

export default router;
