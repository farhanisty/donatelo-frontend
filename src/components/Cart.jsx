import { useEffect } from "react";

export default function Cart({ showCart, closeCart }) {
  useEffect(() => {
    console.log(showCart);
  }, [showCart]);
  return (
    <section
      className={`fixed top-0 right-0 z-[1000] max-w-[500px] w-full h-screen bg-background transition-transform duration-500 px-5 py-5 ${showCart ? "translate-x-0" : "translate-x-[100%]"}`}
    >
      <div className="flex justify-between items-center">
        <h1>CART</h1>
        <button onClick={closeCart} className="font-bold text-2xl opacity-50">
          X
        </button>
      </div>
    </section>
  );
}
