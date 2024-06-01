import { db } from "../../config/firebase";

export async function createUser(phone_number: string, access_code: string) {
  try {
    await db
      .users("Kun")
      .doc(phone_number)
      .set({ phone_number: phone_number, access_code: access_code });
  } catch (error) {
    console.error("createUser repository error", error);
    throw error;
  }
}

export async function updateUser(phone_number: string, access_code: string) {
  try {
    await db
      .users("Kun")
      .doc(phone_number)
      .update({ access_code: access_code });
  } catch (error) {
    console.error("updateUser repository error", error);
    throw error;
  }
}

export async function checkUser(phone_number: string) {
  try {
    const isUserExist = await db.users("Kun").doc(phone_number).get();
    if (isUserExist.exists) {
      return isUserExist.data();
    }
    return null;
  } catch (error) {
    console.error("updateUser repository error", error);
    throw error;
  }
}
