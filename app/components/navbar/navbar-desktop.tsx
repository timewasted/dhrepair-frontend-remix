import { NavbarAvatar } from "~/components/navbar/navbar-avatar";
import { NavbarBurgerButton } from "~/components/navbar/navbar-burger-button";
import { NavbarLinks } from "~/components/navbar/navbar-links";
import { NavbarLogo } from "~/components/navbar/navbar-logo";

export function NavbarDesktop({
    links,
    toggleMobileMenu,
}: {
    links: {
        to: string;
        label: string;
    }[];
    toggleMobileMenu: () => void;
}) {
    return (
        <div className="container mx-auto flex justify-between items-center py-4 px-5">
            <NavbarLogo />
            <NavbarLinks links={links} />
            <NavbarAvatar />
            <NavbarBurgerButton toggleMobileMenu={toggleMobileMenu} />
        </div>
    )
}
