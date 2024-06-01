import { Request, Response, NextFunction } from "express";
import { ResponseSuccess } from "../../utils/response.utils";
import * as service from "./auth.service";

export async function createNewAccessCode(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.info(">>[auth] createNewAccessCode");
  await service.createNewAccessCode(req.body.phone_number);
  return ResponseSuccess(res, null);
}

export async function validateAccessCode(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.info(">>[auth] validateAccessCode");
    const { phone_number, access_code } = req.body;
    await service.validateAccessCode(phone_number, access_code);
    return ResponseSuccess(res, null);
  }

