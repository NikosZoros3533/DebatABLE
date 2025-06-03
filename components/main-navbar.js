import Link from "next/link";

export default function MainHeader() {
    return (
        <header className="bg-emerald-700 text-stone p-4">
        <nav className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">DebateABLE</div>
            <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/debates" className="hover:text-gray-400">Debates</Link></li>
            <li><Link href="/debates/share" className="hover:text-gray-400">Share</Link></li>
            </ul>
        </nav>
        </header>
    );
}