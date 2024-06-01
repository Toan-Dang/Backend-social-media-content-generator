import express from "express";
import { GeneratePostCaptions, GetPostIdeas, CreateCaptionsFromIdeas, SaveGeneratedContent } from "./content.controller";
const router = express.Router();

router.post("/GeneratePostCaptions", GeneratePostCaptions);
router.post("/GeneratePostIdeas", GetPostIdeas);
router.post("/SaveGeneratedContent", SaveGeneratedContent);
router.post("/CreateCaptionsFromIdeas", CreateCaptionsFromIdeas);

export default router;
