import { Link } from "@remix-run/react";
import { useImageContext } from "~/context/root-context";
import { useState } from 'react'

export function Navbar({
    links,
}: {
    links: {
        to: string;
        label: string;
    }[];
}) {
    const imageEndpoint = useImageContext();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full mb-4 shadow-sm bg-black bg-gradient-to-b from-slate-300 to-white dark:from-slate-950 dark:to-slate-800">
            {/* :DESKTOP MENU */}
            <div className="container mx-auto flex justify-between items-center py-4 px-5">
                {/* Site logo */}
                <Link to={"/"} className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src={`${imageEndpoint}/SiteLogoMin.png`} width="246" height="75" alt="Site logo" />
                </Link>

                {/* Navbar */}
                <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                    {links.map((link, index) => (
                        <Link key={index} to={link.to} className="mr-8">{link.label}</Link>
                    ))}
                </nav>

                {/* Avatar */}
                <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                {/* Burger icon standard */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700 dark:focus:ring-amber-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-500 dark:text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* :MOBILE MENU */}
            {isOpen &&
                <div className="w-full flex flex-col py-4 px-3 md:hidden text-base uppercase text-center font-semibold bg-slate-300 dark:bg-gray-900">
                    {links.map((link, index) => (
                        <Link key={index} to={link.to} className="block px-3 py-2 rounded-md">{link.label}</Link>
                    ))}
                </div>
            }
        </header>
    )
}
