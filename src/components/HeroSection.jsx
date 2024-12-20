import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import donut from "./../assets/hero-donat.webp";

export default function HeroSection() {
  const [donatAnimation, setDonatAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDonatAnimation(true);
    }, 2500);
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col px-5 pt-10 md:flex-row justify-center items-start md:items-center gap-10 -translate-y-[50px] bg-primary">
      <div className="w-full md:w-fit flex justify-center">
        <img
          className={`drop-shadow-2xl relative ${donatAnimation ? "han-hero-donut z-1" : "han-hero-donut-start z-[100]"}`}
          src={donut}
          width="500"
        />
      </div>
      <div className="">
        <h1 className="mb-8 text-white text-5xl md:text-7xl inline-block max-w-[400px] font-bold drop-shadow-xl">
          Everyone Love Donut
        </h1>
        <div>
          <NavLink
            to="/shop"
            className="uppercase inline-block py-3 px-6 border text-white border-white hover:bg-white transition-colors duration-300 rounded-sm hover:text-primary"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}
