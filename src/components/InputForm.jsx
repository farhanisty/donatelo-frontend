export default function InputForm({ type, name, placeholder }) {
  return (
    <input
      className="bg-transparent border-b border-black w-[500px] max-w-full px-3 py-1 mt-5"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
