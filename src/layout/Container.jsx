export default function Container({ children, className }) {
  console.log(className);
  return (
    <div className={`max-w-[976px] mx-auto p-5 ${className}`}>{children}</div>
  );
}
