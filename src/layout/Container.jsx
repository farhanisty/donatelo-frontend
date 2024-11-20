export default function Container({ children, className }) {
  return (
    <div className={`max-w-[976px] mx-auto p-5 ${className}`}>{children}</div>
  );
}
