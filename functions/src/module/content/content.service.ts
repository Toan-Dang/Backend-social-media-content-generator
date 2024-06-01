import {
  generateCaptions,
  generateIdeals,
  generateCaptionsWithIdeal,
} from "../../config/gemini";
import * as repo from "./content.repository";
export async function GeneratePostCaptions(
  social_network: string,
  subject: string,
  tone: string
) {
  const captions = await generateCaptions(social_network, subject, tone);
  // const captions = [
  //   "Back to school vibes! 📚 Feeling ready to tackle the new year with a fresh perspective and a whole lot of coffee. ☕️",
  //   "School days are the best days! 🏫 Making memories and learning new things with my amazing classmates. 🤩",
  //   "Who needs a filter when you have school spirit? 😜  #SchoolPride #BackToSchool",
  //   "Can't believe summer is over, but I'm already excited for all the adventures this school year will bring! ✨",
  //   "Time to hit the books! 🤓 Wishing everyone a fantastic school year filled with success and laughter. 😄",
  // ];
  console.log("???captions", captions);
  return captions;
}

export async function GetPostIdeas(topic: string) {
  const captions = await generateIdeals(topic);
  console.log("???captions", captions);
  return captions;
}

export async function CreateCaptionsFromIdeas(idea: string) {
  const captions = await generateCaptionsWithIdeal(idea);
  console.log("???captions", captions);
  return captions;
}

export async function SaveGeneratedContent(topic: string, data: string, phone_number: string) {
    await repo.addOrUpdateCaption(topic, data, phone_number);
}
