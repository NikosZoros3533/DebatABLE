"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  const isActiveClass = "text-secondary font-bold tracking-wide";
  const isHome= path === "/"
  return (
    <header className="py-4 bg-primary font-heading border-b border-primary">
      <nav className="container mx-auto flex justify-between items-center ">
        <Link
          href="/"
        >
          <div className="text-lg font-bold playful-text">
            <span className={isHome ? "text-secondary" : "text-foreground"}>
              Debate
            </span>
            <span className={isHome ? "text-foreground" : "text-secondary"}>
              ABLE
            </span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/debates"
              className={
                path.endsWith("/debates") ? isActiveClass : "hover:text-background"
              }
            >
              Debates
            </Link>
          </li>
          <li>
            <Link
              href="/debates/share"
              className={
                path.startsWith("/debates/share")
                  ? isActiveClass
                  : "hover:text-background"
              }
            >
              Share<span className="text-secondary">+</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
