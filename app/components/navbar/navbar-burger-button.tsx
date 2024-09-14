export function NavbarBurgerButton({
  toggleMobileMenu,
}: {
  toggleMobileMenu: () => void;
}) {
  return (
    <button
      className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700 dark:focus:ring-amber-300"
      onClick={() => toggleMobileMenu()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 rounded-md text-gray-500 dark:text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
