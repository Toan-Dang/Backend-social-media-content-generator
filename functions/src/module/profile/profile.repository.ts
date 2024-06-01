import { db } from "../../config/firebase";

export async function GetUserGeneratedContents(phone_number: string) {
  try {
    const querySnapshot = await db.users("Kun").doc(phone_number).get();
    if (!querySnapshot.exists) {
      return null;
    }
    const userData = querySnapshot.data()?.contents;
    if (userData) {
      return userData;
    }
    return null;
  } catch (error) {
    console.error("GetUserGeneratedContents repository error", error);
    throw error;
  }
}

export async function unSaveContent(phone_number: string, captionId: number) {
    try {
      const userRef = db.users("Kun").doc(phone_number);
      const snapshot = await userRef.get();
      if (!snapshot.exists) {
        console.log(`No user found with phone number: ${phone_number}`);
        return false;
      }

      const captions = snapshot.data()?.captions || [];
      const updatedCaptions = captions.filter((caption: any) => caption.id !== captionId);

      if (updatedCaptions.length !== captions.length) {
        // Update the document if the caption was found and removed
        await userRef.update({ captions: updatedCaptions });
        console.log(`Removed caption with ID: ${captionId}`);
        return true;
      }

      // Caption with the given ID was not found
      console.log(`Caption with ID: ${captionId} not found`);
      return false;
    } catch (error) {
      console.error("Error removing caption: ", error);
      return false;
    }
  }
