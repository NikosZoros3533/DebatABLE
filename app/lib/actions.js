"use server";

import { redirect } from "next/navigation";
import { saveDebate, upvoteDebate, downvoteDebate } from "./debates";
import { revalidatePath } from "next/cache";

export async function shareDebate(prevState,formData) {
  const debate = {
    title: formData.get("title"),
    description: formData.get("description"),
    sideA: formData.get("sideA"),
    sideB: formData.get("sideB"),
  };
  // Validate the form data
  if (
    !debate.title ||
    !debate.description ||
    !debate.sideA ||
    !debate.sideB ||
    debate.title.trim() === "" ||
    debate.description.trim() === "" ||
    debate.sideA.trim() === "" ||
    debate.sideB.trim() === ""
  ) {
    return {
      message: "All fields are required.",
    };
  }

  console.log(debate);
  await saveDebate(debate);
  revalidatePath("/debates");
  redirect("/debates");

  // return { success: true, message: "Debate shared successfully!" };
}

export async function upvote(slug) {
  try {
    await upvoteDebate(slug);
    revalidatePath("/debates");
  } catch (error) {
    console.error("Error upvoting debate:", error);
    return { success: false, message: "Failed to upvote debate." };
  }
}

export async function downvote(slug) {
  try {
    await downvoteDebate(slug);
    revalidatePath("/debates");
  } catch (error) {
    console.error("Error downvoting debate:", error);
    return { success: false, message: "Failed to downvote debate." };
  }
}
