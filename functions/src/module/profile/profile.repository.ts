import { db } from "../../config/firebase";

export async function GetUserGeneratedContents(phone_number: string) {
  try {
    const querySnapshot = await db.users("Kun").doc(phone_number).get();
    if (!querySnapshot.exists) {
      return [];
    }
    const userData = querySnapshot.data()?.contents;
    if (userData) {
      return userData;
    }
    return [];
  } catch (error) {
    console.error("GetUserGeneratedContents repository error", error);
    throw error;
  }
}

export async function unSaveContent(phone_number: string, captionId: string) {
    try {
      const userRef = db.users("Kun").doc(phone_number);
      const userDoc = await userRef.get();
      if (!userDoc.exists) {
        console.log(`No user found with phone number: ${phone_number}`);
        return false;
      }

      let contents = userDoc.data()?.contents || [];
      let captionFound = false;

      contents = contents.map((content: any) => {
        const updatedCaptions = content.captions.filter((caption: any) => caption.id !== captionId);
        if (updatedCaptions.length !== content.captions.length) {
          captionFound = true;
          if (updatedCaptions.length === 0) {
            content.topic = null;
          }
          content.captions = updatedCaptions;
        }
        return content;
      });

      if (captionFound) {
        await userRef.update({ contents });
        console.log(`Removed caption with ID: ${captionId}`);
        return true;
      } else {
        console.log(`Caption with ID: ${captionId} not found`);
        return false;
      }
    } catch (error) {
      console.error("Error removing caption: ", error);
      return false;
    }
  }
