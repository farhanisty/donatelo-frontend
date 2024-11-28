import numberToRupiah from "../service/numberToRupiah.js";

export default function CheckoutItem({ product, qty }) {
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
  return (
    <div className="w-full border rounded px-5 py-3 flex gap-10">
      <div>
        <img
          className="w-[100px]"
          src={`${baseImageUrl}/${product.image}`}
          alt="donut"
        />
      </div>
      <div>
        <h1 className="font-medium uppercase mb-1">{product.name}</h1>
        <h2 className="uppercase text-sm mb-1">
          {numberToRupiah(product.price)}/pcs
        </h2>
        <h3 className="uppercase text-sm">Quantity: {qty}</h3>
      </div>
    </div>
  );
}
