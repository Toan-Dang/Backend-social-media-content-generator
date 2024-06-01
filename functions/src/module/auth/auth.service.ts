import { db } from "../../config/firebase";
import { client } from "../../config/twilio";

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
    const checkUser = await db.users("Kun").doc(phone_number).get();
    if (checkUser.exists) {
      await db
      .users("Kun")
      .doc(phone_number)
      .update({ access_code: access_code });
    } else {
      await db
      .users("Kun")
      .doc(phone_number)
      .set({ phone_number: phone_number, access_code: access_code });
    }

    return access_code;
  } catch (error) {
    console.error("createNewAccessCode service errors", error);
    throw error;
  }
}

export async function validateAccessCode(phone_number: string, access_code: string) {
    try {
        const user = await db.users("Kun").doc(phone_number).get();
        if (user.exists) {
          const userData = user.data() as UserData | undefined;
          if (userData && userData.access_code === access_code) {
            await db.users("Kun").doc(phone_number).update({ access_code: "" });
            return true;
          }
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
