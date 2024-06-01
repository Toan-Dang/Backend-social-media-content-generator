import { Request, Response, NextFunction } from "express";
import { ResponseSuccess } from "../../utils/response.utils";
import * as service from "./profile.service";

export async function GetUserGeneratedContents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[profile] GetUserGeneratedContents params ${JSON.stringify(req.params)}`);
  const result = await service.GetUserGeneratedContents(req.params.phone_number);
  return ResponseSuccess(res, result);
}

export async function UnSaveContent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[profile] UnSaveContent data ${JSON.stringify(req.body)}`);
  const { phone_number, captionId } = req.body;
  await service.UnSaveContent(phone_number, captionId );
  return ResponseSuccess(res, null);
}
