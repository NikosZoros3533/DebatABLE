"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  const isActiveClass = "hover:text-muted text-secondary font-bold tracking-wide";
  return (
    <header className="py-4 bg-primary font-heading border-b border-primary">
      <nav className="container mx-auto flex justify-between items-center ">
        <Link
          href="/"
          className={path === "/" ? isActiveClass : "hover:text-muted"}
        >
          <div className="text-foreground text-lg font-bold playful-text">
            Debate<span className="text-secondary">ABLE</span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/debates"
              className={
                path.endsWith("/debates") ? isActiveClass : "hover:text-muted"
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
                  : "hover:text-muted"
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
