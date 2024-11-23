import { VscDiffAdded } from "react-icons/vsc";

export default function ProductBox({ name, price, image }) {
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
  return (
    <div className="bg-secondary flex-[0_0_30%] p-4 flex flex-col items-center rounded">
      <h1 className="text-center font-bold uppercase text-xl cursor-pointer hover:underline">
        {name}
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
            console.log("hello world");
          }}
        >
          <VscDiffAdded className="text-3xl hover:scale-110" />
        </button>
      </div>
    </div>
  );
}
