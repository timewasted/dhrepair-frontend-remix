import { Link } from "@remix-run/react";
import { useImageContext } from "~/context/root-context";

export function NavbarLogo() {
    const imageEndpoint = useImageContext();

    return (
        <Link to={"/"} className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
            <img src={`${imageEndpoint}/SiteLogoMin.png`} width="246" height="75" alt="Site logo" />
        </Link>
    )
}
