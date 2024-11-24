import { IoMdClose } from "react-icons/io";

import CartItem from "./CartItem.jsx";

export default function Cart({ showCart, closeCart }) {
  return (
    <section
      className={`fixed top-0 right-0 z-[1000] max-w-[500px] border-l w-full h-screen bg-background transition-transform duration-500 px-5 py-5 ${showCart ? "translate-x-0" : "translate-x-[100%]"}`}
    >
      <div className="relative flex justify-between items-center border-b pb-5">
        <h1>CART</h1>
        <button onClick={closeCart} className="font-bold text-2xl opacity-50">
          <IoMdClose />
        </button>
      </div>

      <div
        className="aboslute pt-5 z-[1001] overflow-scroll"
        style={{
          height: "calc(100% - 100px)",
        }}
      >
        <ul className="flex flex-col gap-5">
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 w-full h-[70px] left-0 px-5 z-[1002]">
        <button
          disabled={true}
          className="w-full bg-primary py-3 text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Buy
        </button>
      </div>
    </section>
  );
}
