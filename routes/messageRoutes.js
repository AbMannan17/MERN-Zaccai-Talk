import express from "express";
import { allMessages, sendMessage } from "../controller/messageControllers.js";
import protect from "../midleware/authMidleware.js";

  
  const router = express.Router();
  
  router.route("/:chatId").get(protect, allMessages);
  router.route("/").post(protect, sendMessage);

  export default router;