import { Request, Response, NextFunction } from "express";
import { ResponseSuccess, ResponseError } from "../../utils/response.utils";
import * as service from "./auth.service";

export async function createNewAccessCode(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[auth] createNewAccessCode data ${JSON.stringify(req.body)}`);
  await service.createNewAccessCode(req.body.phone_number);
  return ResponseSuccess(res, null);
}

export async function validateAccessCode(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(`>>[auth] validateAccessCode data ${JSON.stringify(req.body)}`);
  const { phone_number, access_code } = req.body;
  const status = await service.validateAccessCode(phone_number, access_code);
  if (status === true) {
    return ResponseSuccess(res, null);
  }
  return ResponseError(res, 401);
}
