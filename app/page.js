import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-secondary py-8 mb-8">
        <div className="text-center">
          <h1 className=" text-primary font-heading text-4xl md:text-5xl mb-2">
            Debates for non-Debaters
          </h1>
          <p className="playful-text text-muted text-[1.2rem]">
            Conflicting Debates with no actual figurable answer
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <Link href="/debates" className="btn-playful bg-background text-foreground">
            Join The community
          </Link>
          <Link href="/debates/share" className="btn-playful bg-foreground text-background">
            Share your point
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto bg-primary rounded-3xl shadow-lg p-8">
        <section>
          <h2 className="text-background playful-text font-heading text-2xl md:text-3xl m-4">
            Welcome to the Debates
          </h2>
          <p className="mb-4 text-foreground">
            Here, we explore a variety of topics that spark discussion and
            debate. Whether you have a strong opinion or just want to listen,
            there&apos;s something for everyone.
          </p>
          <p className="text-foreground">
            Feel free to join the community, share your thoughts, or simply
            browse through the ongoing debates.
          </p>
        </section>
      </main>
    </>
  );
}
