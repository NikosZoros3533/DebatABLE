"use server";

import { redirect } from "next/navigation";
import { saveDebate } from "./debates";

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
