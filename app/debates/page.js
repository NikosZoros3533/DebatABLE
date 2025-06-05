import DebatesGrid from "@/components/debates/debates-grid";

export default function DebatePage() {
  const debates= [
    {
      id: 1,
      title: "Is AI a Threat to Humanity?",
      description: "Discuss the potential risks and benefits of AI technology."
    },
    {
      id: 2,
      title: "Should Social Media be Regulated?",
      description: "Explore the implications of social media on society."
    },
    {
      id: 3,
      title: "Is Climate Change the Biggest Challenge of Our Time?",
      description: "Debate the urgency and impact of climate change."
    }
  ];
  return (
    <>
      <header className="flex flex-col items-center justify-start text-secondary mb-6">
        <label className="text-4xl font-extrabold mt-5 tracking-wide uppercase">
          Fight
        </label>
        <p>Help The community Resolve the deabates</p>
      </header>
      <main><DebatesGrid debates={debates}/></main>
    </>
  );
}
