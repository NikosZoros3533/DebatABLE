'use client';
import { useFormStatus } from "react-dom";

export default function DebatesFormSubmit(){
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full py-3 bg-primary text-secondary rounded font-semibold text-lg hover:bg-secondary hover:cursor-grab hover:text-primary disabled:opacity-25 transition"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Share Debate"}
    </button>
  );
}