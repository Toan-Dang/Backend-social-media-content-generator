import { client } from "../../config/twilio";
import * as repo from "./auth.repository";
export async function createNewAccessCode(phone_number: string) {
  try {
    const access_code = generateRandomSixDigitNumber();
    await client.messages
      .create({
        body: access_code,
        from: "+12244902741",
        //   to: "+84329487988",
        to: phone_number,
      })
      .then((message: any) => console.log(message.sid));
    const checkUser = await repo.checkUser(phone_number);
    if (checkUser) {
      await repo.updateUser(phone_number, access_code);
    } else {
      await repo.createUser(phone_number, access_code);
    }

    return access_code;
  } catch (error) {
    console.error("createNewAccessCode service errors", error);
    throw error;
  }
}

export async function validateAccessCode(
  phone_number: string,
  access_code: string
) {
  try {
    const user = await repo.checkUser(phone_number);
    if (user && user.access_code === access_code) {
      await repo.updateUser(phone_number, "");
      return true;
    }
    return false;
  } catch (error) {
    console.error("validateAccessCode service errors", error);
    throw error;
  }
}

function generateRandomSixDigitNumber(): string {
  // Generate a random number between 100000 and 999999
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
}
