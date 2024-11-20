import { VscDiffAdded } from "react-icons/vsc";

export default function ProductBox({ name, price, image }) {
  return (
    <div className="bg-secondary hover:opacity-70 flex-1 p-4 flex flex-col items-center rounded">
      <h1 className="text-center font-bold uppercase text-xl">{name}</h1>
      <img
        className="my-10 object-fit w-[150px] h-[150px]"
        src={`http://localhost:8000/storage/${image}`}
        width="150"
        height="150"
        alt="donat"
      />
      <div className="w-full flex justify-between">
        <h2>Rp. {price}</h2>
        <VscDiffAdded className="text-3xl" />
      </div>
    </div>
  );
}
