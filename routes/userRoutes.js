import express from "express";
import {
  allUsers,
  loginUser,
  registerUser,
} from "../controller/userControllers.js";
import protect from "../midleware/authMidleware.js";

const router = express.Router();

router.route("/").get( protect ,allUsers);
router.post("/", registerUser);
router.post("/login", loginUser);

export default router;

// protect,
