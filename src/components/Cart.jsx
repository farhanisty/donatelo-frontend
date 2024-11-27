import { IoMdClose } from "react-icons/io";
import { useQuery } from "react-query";
import { useRef, useEffect } from "react";
import CartItem from "./CartItem.jsx";
import { getDonuts } from "../repository/donut.js";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

export default function Cart({ showCart, closeCart }) {
  const { data: donuts, isLoading } = useQuery("getDonuts", getDonuts);

  const carts = useSelector((state) => {
    return state.cart.data;
  });

  console.log(carts);

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

      {isLoading && <div>loading</div>}

      {!isLoading && (
        <div
          className="aboslute pt-5 z-[1001] overflow-scroll"
          style={{
            height: "calc(100% - 100px)",
          }}
        >
          {carts.length == 0 ? (
            <h1 className="text-center">cart is empty</h1>
          ) : (
            <ul className="flex flex-col gap-5">
              {carts.map((item, key) => {
                const product = donuts.find((donut) => donut.id === item.id);
                return (
                  <li key={key}>
                    <CartItem product={product} qty={item.qty} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
      <div className="absolute bottom-0 w-full h-[70px] left-0 px-5 z-[1002]">
        {carts.length ? (
          <NavLink
            to="/checkout"
            disabled={carts.length ? false : true}
            className="w-full inline-block text-center bg-primary py-3 text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </NavLink>
        ) : (
          <button
            disabled={carts.length ? false : true}
            className="w-full inline-block text-center bg-primary py-3 text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        )}
      </div>
    </section>
  );
}
