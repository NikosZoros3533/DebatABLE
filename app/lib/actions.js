"use server";

import { saveDebate } from "./debates";

export async function shareDebate(formData) {
  const debate = {
    title: formData.get("title"),
    description: formData.get("description"),
    sideA: formData.get("sideA"),
    sideB: formData.get("sideB"),
  };

  console.log(debate);
  saveDebate(debate);

  return { success: true, message: "Debate shared successfully!" };
}
