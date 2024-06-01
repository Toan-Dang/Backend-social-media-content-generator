import express from "express";
import { createNewAccessCode, validateAccessCode } from "./auth.controller";
const router = express.Router();

router.post("/send-access-code", createNewAccessCode);
router.post("/verify-access-code", validateAccessCode);

export default router;
