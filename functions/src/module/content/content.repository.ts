import { db } from "../../config/firebase";

export async function addOrUpdateCaption(
  topic: string,
  data: string,
  phone_number: string
) {
  try {
    const topicRef = db.users("Kun").doc(phone_number);
    const topicDoc = await topicRef.get();
    const contents = topicDoc.exists ? topicDoc.data()?.contents || [] : [];

    // Reference to the global ID tracker
    const idRef = db.idTracker("Kun", phone_number).doc("captions_id");
    const idDoc = await idRef.get();
    let newId = 1;

    if (idDoc.exists) {
      newId = idDoc.data()?.currentId + 1;
    }

    const topicIndex = contents.findIndex((content: any) => content.topic === topic);
    if (topicIndex !== -1) {
      // Update existing topic
      const existingCaptions = contents[topicIndex].captions || [];
      const updatedCaptions = [...existingCaptions, { id: newId.toString(), text: data }];
      contents[topicIndex].captions = updatedCaptions;
      console.log(`Updated topic: ${topic}`);
    } else {
      // Create new topic
      contents.push({ topic, captions: [{ id: newId.toString(), text: data }] });
      console.log(`Created new topic: ${topic}`);
    }

    await topicRef.update({ contents });
    await idRef.set({ currentId: newId });
  } catch (error) {
    console.error("Error adding or updating caption: ", error);
  }
}
