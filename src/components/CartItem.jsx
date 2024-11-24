import donutImage from "./../assets/hero-donat.webp";

export default function CartItem() {
  return (
    <div className="flex gap-5 border-b pb-3">
      <img className="w-[30%]" src={donutImage} alt="" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl uppercase font-semibold">Donta enak</h1>
        <h2>Rp 30000/pcs</h2>
        <div className="w-min flex border border-black py-1 rounded-full">
          <button className="w-[40px]">-</button>
          <p>3</p>
          <button className="w-[40px]">+</button>
        </div>
      </div>
    </div>
  );
}
