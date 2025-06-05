import DebateItem from "./debateItem";
const debates = [
  {
    title: "Should remote work be permanent?",
    description:
      "Discussing whether companies should allow permanent remote work.",
    sideA: { title: "Yes", percentage: 65 },
    sideB: { title: "No", percentage: 35 },
    creator: "Alice",
    createdAt: "2025-06-04T12:00:00Z",
  },
  {
    title: "Should remote work be permanent?",
    description:
      "Discussing whether companies should allow permanent remote work.",
    sideA: { title: "Yes", percentage: 65 },
    sideB: { title: "No", percentage: 35 },
    creator: "Alice",
    createdAt: "2025-06-04T12:00:00Z",
  },
];

export default function DebatesGrid({ debates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {debates.map((debate) => (
        <div key={debate.id} className="bg-primary rounded-lg shadow-lg p-6">
          <DebateItem debate={debate} />
        </div>
      ))}
    </div>
  );
}
