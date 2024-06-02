import * as repo from "./profile.repository";
export async function GetUserGeneratedContents(phone_number: string) {
  try {
    return await repo.GetUserGeneratedContents(phone_number);
  } catch (error) {
    console.error("createNewAccessCode error: ", error);
    throw error;
  }
}

export async function UnSaveContent(phone_number: string, captionId: string) {
    try {
      return await repo.unSaveContent(phone_number, captionId);
    } catch (error) {
      console.error("createNewAccessCode error: ", error);
      throw error;
    }
  }
