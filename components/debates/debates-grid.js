import DebateItem from "./debateItem";

export default function DebatesGrid({ debates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {debates.map((debate) => (
        <div key={debate.id} className="rounded-lg p-6">
          <DebateItem debate={debate} />
        </div>
      ))}
    </div>
  );
}
