import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="w-full bg-surface shadow-sm sticky top-0 z-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <Logo className="h-8 w-auto text-primary" />
                        <span className="font-bold text-lg text-on-surface hidden sm:block">
                            Shocked Future
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-on-surface-variant hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/games"
                            className="text-on-surface-variant hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Games
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-on-surface-variant hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}