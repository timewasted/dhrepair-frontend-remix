import { useState } from "react";

import { NavbarDesktop } from "~/components/navbar/navbar-desktop";
import { NavbarMobile } from "~/components/navbar/navbar-mobile";

export function Navbar({
  links,
}: {
  links: {
    to: string;
    label: string;
  }[];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full mb-4 shadow-sm bg-black bg-gradient-to-b from-slate-300 to-white dark:from-slate-950 dark:to-slate-800">
      <NavbarDesktop
        links={links}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <NavbarMobile links={links} isMenuOpen={isMobileMenuOpen} />
    </header>
  );
}
