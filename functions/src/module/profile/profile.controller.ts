import { Request, Response, NextFunction } from "express";
import { ResponseSuccess } from "../../utils/response.utils";
import * as service from "./profile.service";

export async function GetUserGeneratedContents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[auth] GetUserGeneratedContents data ${req.body}`);
  await service.GetUserGeneratedContents(req.body.phone_number);
  return ResponseSuccess(res, null);
}

export async function UnSaveContent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[auth] UnSaveContent data ${req.body}`);
  const { phone_number, captionId } = req.body;
  await service.UnSaveContent(phone_number, captionId );
  return ResponseSuccess(res, null);
}
