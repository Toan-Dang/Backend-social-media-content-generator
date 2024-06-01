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
