import DebatesGrid from "@/components/debates/debates-grid";
import { getDebates } from "../lib/debates";
import { Suspense } from "react";
import DebatesLoadingPage from "./loading-out";

async function Debates() {
  const debates = await getDebates();
  return <DebatesGrid debates={debates} />;
}

export default async function DebatePage() {
  return (
    <>
      <header className="flex flex-col items-center justify-start text-foreground mb-6 border-b border-foreground pb-4">
        <label className="text-4xl font-extrabold mt-5 tracking-wide uppercase">
          Fight
        </label>
        <p>Help The community Resolve the debates</p>
      </header>
      <main>
        <Suspense fallback={DebatesLoadingPage()}>
          <Debates />
        </Suspense>
      </main>
    </>
  );
}
