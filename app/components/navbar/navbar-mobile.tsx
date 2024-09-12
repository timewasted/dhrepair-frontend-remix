import { Link } from "@remix-run/react";

export function NavbarMobile({
    links,
    isMenuOpen,
}: {
    links: {
        to: string;
        label: string;
    }[];
    isMenuOpen: boolean;
}) {
    return isMenuOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden text-base uppercase text-center font-semibold bg-slate-300 dark:bg-gray-900">
            {links.map((link, index) => (
                <Link key={index} to={link.to} className="block px-3 py-2 rounded-md">{link.label}</Link>
            ))}
        </div>
    )
}
