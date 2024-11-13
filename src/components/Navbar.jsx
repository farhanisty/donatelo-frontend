import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollNavbarStatus, setScrollNavbarStatus] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setScrollNavbarStatus(true);
      } else {
        setScrollNavbarStatus(false);
      }
    });
  }, []);
  return (
    <nav
      className={`flex justify-between w-full px-5 py-3 z-20 sticky top-0 transition-colors duration-500 ${scrollNavbarStatus ? "backdrop-blur bg-white/50" : "text-white bg-primary"}`}
    >
      <ul className="gap-5 hidden md:flex">
        <li>Shop</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <h1
        className={`justify-self-center font-['caveat'] transition-colors duration-500 text-4xl ${!scrollNavbarStatus ? " text-secondary" : ""}`}
      >
        Donatello
      </h1>
      <button>Cart</button>
    </nav>
  );
}
