import { getDebate } from "@/app/lib/debates";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  const debate = await getDebate(params.slug);
  if (!debate) {
    notFound();
  }
  return {
    title: `${debate.title}`,
    description: debate.description || "No description available for this debate.",
  };
}


export default async function DebateDetailPage({ params }) {
  const debate =await getDebate(params.slug); 
  if (!debate) {
    notFound();
  }
  return (
    <div className="min-h-screen flex items-start justify-center">
      <h1 className="text-4xl font-extrabold mt-5  drop-shadow-glow tracking-wide">
        Debate Post Page: [{debate.slug}]
      </h1>
      <h2>Title</h2>
      <p>Description</p>
      <p>
        by<a href={`mailto:${"EMAIL"}`}>Name</a>
      </p>
    </div>
  );
}
