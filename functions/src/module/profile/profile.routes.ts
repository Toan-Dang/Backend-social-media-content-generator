import express from "express";
import { GetUserGeneratedContents, UnSaveContent } from "./profile.controller";
const router = express.Router();

router.get("/GetUserGeneratedContents/:phone_number", GetUserGeneratedContents);
router.post("/UnSaveContent", UnSaveContent);

export default router;
