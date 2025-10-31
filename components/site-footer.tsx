import Link from "next/link";
import React from "react";

function SiteFooter() {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-sm text-slate-400 pl-0 ml-0 lg:pl-20 lg:ml-20">
            © 2025 Shocked Future Studios LLC. All rights reserved. Patreon®, and its logo are the trademarks of Patreon, Inc.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 pr-0 mr-0 lg:pr-20 lg:mr-20">
            <Link
              href="https://patreon.com/ShockedFutureStudios"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Patreon</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.9569 7.21006C22.9527 4.14562 20.566 1.63406 17.7658 0.727837C14.2884 -0.397497 9.70222 -0.234385 6.38178 1.33228C2.35734 3.23139 1.09311 7.39139 1.046 11.5403C1.00733 14.9514 1.34778 23.9356 6.41533 23.9996C10.1807 24.0474 10.7413 19.1956 12.4836 16.8589C13.7231 15.1965 15.3191 14.7269 17.2838 14.2407C20.6604 13.4049 22.9618 10.7401 22.9569 7.21006Z"/>
                </svg>
            </Link>
            <Link
              href="https://x.com/Shocked_Future"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="sr-only">X (Formerly Twitter)</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
