import { Navbar } from "~/components/navbar/navbar";

export function SiteHeader() {
  return (
    <Navbar
      links={[
        { to: "/", label: "Home" },
        { to: "/store/categories", label: "Categories" },
        { to: "/store/category/2588", label: "Rewaco" },
        { to: "/contact", label: "Contact" },
      ]}
    />
  );
}
