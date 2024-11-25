import { NavLink } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";

export default function ProductBox({ id, name, price, image }) {
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
  const dispatch = useDispatch();

  return (
    <div className="bg-secondary flex-[0_0_30%] p-4 flex flex-col items-center rounded">
      <h1 className="text-center font-bold uppercase text-xl cursor-pointer hover:underline">
        <NavLink to={`/menu/${id}`}>{name}</NavLink>
      </h1>
      <img
        className="my-10 object-fit w-[150px] h-[150px]"
        src={`${baseImageUrl}/${image}`}
        width="150"
        height="150"
        alt="donat"
      />
      <div className="w-full flex justify-between">
        <h2>Rp. {price}</h2>
        <button
          onClick={() => {
            return dispatch(addToCart({ id, qty: 1 }));
          }}
        >
          <VscDiffAdded className="text-3xl hover:scale-110" />
        </button>
      </div>
    </div>
  );
}
