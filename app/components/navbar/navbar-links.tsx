import { Link } from "@remix-run/react";

export function NavbarLinks({
    links,
}: {
    links: {
        to: string;
        label: string;
    }[];
}) {
    return (
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
            {links.map((link, index) => (
                <Link key={index} to={link.to} className="mr-8">{link.label}</Link>
            ))}
        </nav>
    )
}
