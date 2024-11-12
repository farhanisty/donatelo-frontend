import { useState, useEffect } from "react";
import donut from "./../assets/hero-donat.webp";

export default function HeroSection() {
  const [donatAnimation, setDonatAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDonatAnimation(true);
    }, 2900);
  }, []);
  return (
    <div className="absolute inset-0 flex flex-col px-5 md:flex-row justify-center items-start md:items-center gap-10">
      <div className="">
        <img
          className={`drop-shadow-2xl relative ${donatAnimation ? "han-hero-donut z-1" : "han-hero-donut-start z-[100]"}`}
          src={donut}
          width="500"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-7xl inline-block max-w-[400px] font-bold drop-shadow-xl">
          Everyone Love Donut
        </h1>
        <div>
          <button className="uppercase inline-block py-3 px-6 border text-white border-white hover:bg-white transition-colors duration-300 rounded-sm hover:text-primary">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
