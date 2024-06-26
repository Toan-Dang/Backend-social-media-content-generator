import { Request, Response, NextFunction } from "express";
import { ResponseSuccess } from "../../utils/response.utils";
import * as service from "./content.service";

export async function GeneratePostCaptions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[content] GeneratePostCaptions data ${JSON.stringify(req.body)}`);
  const { socialNetwork, subject, tone } = req.body;
  const result = await service.GeneratePostCaptions(
    socialNetwork,
    subject,
    tone
  );
  return ResponseSuccess(res, result);
}

export async function GetPostIdeas(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[content] GetPostIdeas data ${JSON.stringify(req.body)}`);
  const { topic } = req.body;
  const result = await service.GetPostIdeas(topic);
  return ResponseSuccess(res, result);
}

export async function CreateCaptionsFromIdeas(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[content] CreateCaptionsFromIdeas data ${JSON.stringify(req.body)}`);
  const { idea } = req.body;
  const result = await service.CreateCaptionsFromIdeas(idea);
  return ResponseSuccess(res, result);
}

export async function SaveGeneratedContent(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.info(`>>[content] SaveGeneratedContent data ${JSON.stringify(req.body)}`);
    const { topic, data, phone_number } = req.body;
    await service.SaveGeneratedContent(topic, data, phone_number);
    return ResponseSuccess(res, null);
  }
