import Container from "../layout/Container.jsx";
import CheckoutItem from "../components/CheckoutItem.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getDonuts, createPayment } from "../repository/donut.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice.js";

export default function Checkout() {
  const { data: donuts, error, isLoading } = useQuery("getDonuts", getDonuts);
  const dispatch = useDispatch();

  const carts = useSelector((state) => {
    return state.cart.data;
  });

  async function coba() {
    const response = await createPayment({
      name: "farhannivta",
      email: "farhannivtasija@gmail.com",
      orders: carts,
    });

    if (response.status) {
      dispatch(clearCart({}));
    }
  }

  function handleOnPay() {
    coba();
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <main className="min-w-screen min-h-screen bg-background">
      <header className="border-b">
        <Container>
          <div className="w-full flex justify-between">
            <NavLink
              to="/"
              className="font-bold text-2xl uppercase font-['caveat']"
            >
              Donatelo
            </NavLink>
            <h2 to="/" className="font-bold text-xl uppercase">
              Checkout
            </h2>
          </div>
        </Container>
      </header>

      <section>
        <Container>
          <div className="flex flex-col md:flex-row gap-5">
            <ul className="flex flex-col gap-5 w-full md:w-1/2">
              {carts.map((item, key) => {
                const product = donuts.find((donut) => donut.id == item.id);
                return (
                  <CheckoutItem key={key} product={product} qty={item.qty} />
                );
              })}
            </ul>
            <div className="border-t md:border-t-0 md:border-l px-3">
              <h1 className="capitalize font-semibold">details</h1>
              <table>
                <tbody>
                  <tr>
                    <td className="w-[350px]">1. hello x 20</td>
                    <td>:</td>
                    <td>world</td>
                  </tr>
                  <tr>
                    <td className="w-[350px]">1. hello x 20</td>
                    <td>:</td>
                    <td>world</td>
                  </tr>
                  <tr>
                    <td className="w-[350px]">1. hello x 20</td>
                    <td>:</td>
                    <td>world</td>
                  </tr>
                  <tr className="border-t">
                    <td className="w-[350px]">1. hello x 20</td>
                    <td>:</td>
                    <td>world</td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={handleOnPay}
                className="inline-block mt-5 w-full py-3 bg-secondary text-center hover:opacity-70"
              >
                Pay
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
