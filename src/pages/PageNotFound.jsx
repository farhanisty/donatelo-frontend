import { NavLink } from "react-router-dom";
export default function PageNotFound() {
  return (
    <main className="bg-background w-screen h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <p className="text-2xl">
        Oops not found, go to{" "}
        <NavLink className="text-cyan-600 underline" to="/">
          home
        </NavLink>
        ?
      </p>
    </main>
  );
}
