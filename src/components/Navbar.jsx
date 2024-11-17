import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollNavbarStatus, setScrollNavbarStatus] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
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
      className={`flex justify-between w-full px-5 py-3 z-20 sticky top-0 transition-colors duration-500 ${scrollNavbarStatus && !showNavbar ? "backdrop-blur bg-white/50" : "text-white bg-primary"}`}
    >
      <ul
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
        className="md:hidden relative w-[30px] h-[20px] z-[1001] flex flex-col justify-between items-center cursor-pointer"
      >
        <li
          className={`w-full h-[2px] transition-all duration-500 ${showNavbar ? "origin-left rotate-[37deg] bg-black" : ""} ${!scrollNavbarStatus && !showNavbar ? "bg-white" : "bg-black"}`}
        ></li>
        <li
          className={`w-full h-[2px] transition-all duration-500 ${showNavbar ? "scale-0 bg-black" : ""} ${!scrollNavbarStatus && !showNavbar ? "bg-white" : "bg-black"}`}
        ></li>
        <li
          className={`w-full h-[2px] transition-all duration-500 ${showNavbar ? "origin-left -rotate-[37deg] bg-black" : ""} ${!scrollNavbarStatus && !showNavbar ? "bg-white" : "bg-black"}`}
        ></li>
      </ul>
      <ul
        className={`${showNavbar ? "" : "-translate-x-[100vw]"} transition-transform duration-500 gap-5 flex flex-col md:flex-row md:translate-x-0 pt-[5rem] md:pt-0 px-[2rem] md:px-0 fixed md:static inset-0 z-[1000] bg-background text-black md:bg-transparent ${!scrollNavbarStatus ? "md:text-white" : ""}`}
      >
        <li>Shop</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
        <h1
          className={`justify-self-center font-['caveat'] transition-colors duration-500 text-4xl ${!scrollNavbarStatus ? " text-secondary" : ""}`}
        >
          Donatello
        </h1>
      </div>
      <button>Cart</button>
    </nav>
  );
}
