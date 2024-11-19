import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar() {
  const [scrollNavbarStatus, setScrollNavbarStatus] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const location = useLocation();

  console.log(location);

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
    <>
      <Cart
        closeCart={() => {
          setShowCart(false);
        }}
        showCart={showCart}
      />
      <nav
        className={`sticky flex justify-between w-full px-5 h-[50px] items-center z-20 top-0 transition-colors duration-500 ${scrollNavbarStatus && !showNavbar ? "backdrop-blur bg-white/50" : "text-white"}`}
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
          <li
            className={`hover:-translate-y-[2px] transition-transform duration-200 ${location.pathname == "/shop" ? "" : "opacity-70"}`}
          >
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li
            className={`hover:-translate-y-[2px] transition-transform duration-200 ${location.pathname == "/about" ? "" : "opacity-70"}`}
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className={`hover:-translate-y-[2px] transition-transform duration-200 ${location.pathname == "/contact" ? "" : "opacity-70"}`}
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <h1
            className={`justify-self-center font-['caveat'] transition-colors duration-500 text-4xl ${!scrollNavbarStatus ? " text-secondary" : ""}`}
          >
            <NavLink to="/">Donatello</NavLink>
          </h1>
        </div>
        <button
          onClick={() => {
            setShowCart(true);
          }}
          className="cursor-pointer relative hover:opacity-70"
        >
          Cart
        </button>
      </nav>
    </>
  );
}
