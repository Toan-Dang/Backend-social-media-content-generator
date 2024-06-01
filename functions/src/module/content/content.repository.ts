import { db } from "../../config/firebase";

export async function addOrUpdateCaption(
  topic: string,
  data: string,
  phone_number: string
) {
  try {
    const topicRef = db.users("Kun").doc(phone_number);
    const topicDoc = await topicRef.get();

    if (topicDoc.exists) {
      // Update existing topic
      const existingCaptions = topicDoc.data()?.captions || [];
      const newId = existingCaptions.length ? Math.max(
        ...existingCaptions.map((caption: any) => caption.id)) + 1: 1;
      const updatedCaptions = [...existingCaptions, { id: newId, text: data }];
      await topicRef.update({ captions: updatedCaptions });
      console.log(`Updated topic: ${topic}`);
    } else {
      // Create new topic
      await topicRef.set({ captions: [{ id: 1, text: data }] });
      console.log(`Created new topic: ${topic}`);
    }
  } catch (error) {
    console.error("Error adding or updating caption: ", error);
  }
}
