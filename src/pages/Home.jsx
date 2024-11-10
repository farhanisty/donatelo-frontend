import { useEffect, useState } from "react";

export default function Home() {
  const [scrollNavbarStatus, setScrollNavbarStatus] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY) {
        setScrollNavbarStatus(true);
      } else {
        setScrollNavbarStatus(false);
      }
    });
  }, []);
  return (
    <>
      <header className="w-screen h-screen bg-[#058740]">
        <nav
          className={`flex justify-between w-full px-5 py-3 z-20 sticky top-0 transition-colors duration-500 ${scrollNavbarStatus ? "backdrop-blur bg-white/30" : ""}`}
        >
          <ul className="flex self-center gap-5">
            <li>Shop</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <h1>Donatello</h1>
          <button>Cart</button>
        </nav>
      </header>
      <h1>hello world</h1>
    </>
  );
}
