"use server";

import { redirect } from "next/navigation";
import { saveDebate,upvoteDebate,downvoteDebate } from "./debates";

export async function shareDebate(formData) {
  const debate = {
    title: formData.get("title"),
    description: formData.get("description"),
    sideA: formData.get("sideA"),
    sideB: formData.get("sideB"),
  };

  console.log(debate);
  await saveDebate(debate);
  redirect("/debates");

  return { success: true, message: "Debate shared successfully!" };
}

export async function upvote(slug) {
  try {
    await upvoteDebate(slug);
    redirect(`/debates/${slug}`);
  } catch (error) {
    console.error("Error upvoting debate:", error);
    return { success: false, message: "Failed to upvote debate." };
  }
}

export async function downvote(slug) {
  try {
    await downvoteDebate(slug);
    redirect(`/debates/${slug}`);
  } catch (error) {
    console.error("Error downvoting debate:", error);
    return { success: false, message: "Failed to downvote debate." };
  }
} 