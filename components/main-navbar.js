import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="p-4 bg-secondary  font-heading ">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-primary text-lg font-bold playful-text">
          DebateABLE
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-muted">
              Home
            </Link>
          </li>
          <li>
            <Link href="/debates" className="hover:text-muted">
              Debates
            </Link>
          </li>
          <li>
            <Link href="/debates/share" className="hover:text-muted">
              Share
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
