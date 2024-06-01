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

    const topicIndex = contents.findIndex((content: any) => content.topic === topic);
    if (topicIndex !== -1) {
      // Update existing topic
      const existingCaptions = contents[topicIndex].captions || [];
      const newId = existingCaptions.length ? Math.max(
        ...existingCaptions.map((caption: any) => parseInt(caption.id))) + 1 : 1;
      const updatedCaptions = [...existingCaptions, { id: newId.toString(), text: data }];
      contents[topicIndex].captions = updatedCaptions;
      console.log(`Updated topic: ${topic}`);
    } else {
      // Create new topic
      contents.push({ topic, captions: [{ id: "1", text: data }] });
      console.log(`Created new topic: ${topic}`);
    }

    await topicRef.update({ contents });
  } catch (error) {
    console.error("Error adding or updating caption: ", error);
  }
}
