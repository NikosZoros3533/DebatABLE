"use client";
export default function DebatesErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="text-secondary text-2xl font-bold">
        <p>Something went wrong while loading the debates.</p>
        <p>Please try again later.</p>
      </div>
    </div>
  );
}
