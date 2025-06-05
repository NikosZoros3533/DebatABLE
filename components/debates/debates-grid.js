import Link from "next/link";


export default function DebatesGrid({ debates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {debates.map((debate) => (
        <div key={debate.id} className="bg-primary rounded-lg shadow-lg p-6">
          <h3 className="text-secondary font-bold text-xl mb-2">
            {debate.title}
          </h3>
          <p className="text-muted mb-4">{debate.description}</p>
          <Link
            href={`/debates/${debate.id}`}
            className="btn-playful bg-background text-foreground"
          >
            Join Debate
          </Link>
        </div>
      ))}
    </div>
  );
}
