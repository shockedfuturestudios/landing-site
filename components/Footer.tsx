import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-surface-variant text-on-surface-variant mt-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Shocked Future Studios. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary">Twitter</a>
                        <a href="#" className="hover:text-primary">YouTube</a>
                        <a href="#" className="hover:text-primary">Patreon</a>
                    </div>

                    {/* Legal Links (New) */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-sm hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm hover:text-primary">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}