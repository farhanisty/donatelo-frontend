import donutImage from "./../assets/hero-donat.webp";
import { useDispatch } from "react-redux";
import { addToCart, decrementCart } from "../redux/slices/cartSlice.js";

export default function CartItem({ product, qty }) {
  const dispatch = useDispatch();
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
  return (
    <div className="flex gap-5 border-b pb-3">
      <img
        className="w-[30%]"
        src={`${baseImageUrl}/${product.image}`}
        alt="donut image"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl uppercase font-semibold">{product.name}</h1>
        <h2>Rp {product.price}/pcs</h2>
        <div className="w-min flex border border-black py-1 rounded-full">
          <button
            onClick={() => {
              dispatch(
                decrementCart({
                  id: product.id,
                  qty: 1,
                }),
              );
            }}
            className="w-[40px]"
          >
            -
          </button>
          <p>{qty}</p>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id: product.id,
                  qty: 1,
                }),
              );
            }}
            className="w-[40px]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
