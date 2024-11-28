import Container from "../layout/Container.jsx";
import numberToRupiah from "../service/numberToRupiah.js";
import CheckoutItem from "../components/CheckoutItem.jsx";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery, useMutation } from "react-query";
import { getDonuts, createPayment } from "../repository/donut.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice.js";
import { useRef, useState } from "react";

export default function Checkout() {
  const { data: donuts, isLoading } = useQuery("getDonuts", getDonuts);
  const [isOpenModal, setIsOpenModal] = useState(0);
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const dispatch = useDispatch();

  const carts = useSelector((state) => {
    return state.cart.data;
  });

  const { mutate } = useMutation(createPayment, {
    onSuccess: () => {
      setIsOpenModal(2);
    },
  });

  if (!carts.length) {
    return <Navigate to="/" replace={true} />;
  }

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setIsOpenModal(1);
    mutate({
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      orders: carts,
    });
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  let totalPrice = 0;

  carts.forEach((item) => {
    const product = donuts.find((donut) => donut.id == item.id);

    totalPrice += product.price * item.qty;
  });

  return (
    <>
      {isOpenModal !== 0 && (
        <section className="fixed inset-0 bg-black/[.5] flex justify-center items-center">
          {isOpenModal === 1 && (
            <div className="bg-white rounded p-10 max-w-[400px] flex flex-col justify-center">
              <h1 className="font-semibold uppercase text-2xl mb-5 text-center">
                Loading...
              </h1>
              <p className="mb-5">Please wait, we are processing your order.</p>
            </div>
          )}
          {isOpenModal === 2 && (
            <div className="bg-white rounded p-10 max-w-[400px] flex flex-col justify-center">
              <h1 className="font-semibold uppercase text-2xl mb-5 text-center text-primary">
                Success
              </h1>
              <p className="mb-5">
                Thank you for your order. We have send token to your email.
              </p>
              <button
                onClick={() => {
                  dispatch(clearCart({}));
                }}
                className="inline-block border px-10 py-3 bg-primary text-white rounded"
              >
                Back
              </button>
            </div>
          )}
        </section>
      )}

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
              <div className="border-t md:border-t-0 w-full md:w-1/2 md:border-l px-3">
                <h1 className="capitalize font-semibold mb-3 mt-5 md:mt-0">
                  Payment Form
                </h1>
                <form onSubmit={handleSubmitPayment}>
                  <input
                    className="w-full border bg-transparent p-3 py-2 mb-5"
                    placeholder="name"
                    ref={inputNameRef}
                    type="text"
                    required
                  />

                  <input
                    className="w-full border bg-transparent p-3 py-2 mb-5"
                    placeholder="email"
                    ref={inputEmailRef}
                    type="email"
                    required
                  />

                  <h1 className="capitalize font-semibold">details</h1>
                  <table className="w-full">
                    <tbody>
                      {carts.map((item, key) => {
                        const product = donuts.find(
                          (donut) => donut.id == item.id,
                        );

                        return (
                          <tr key={key} className="w-full">
                            <td className="w-[250px]">
                              {key + 1}. {product.name} x {item.qty}
                            </td>
                            <td className="">:</td>
                            <td className="">
                              {numberToRupiah(product.price * item.qty)}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-t">
                        <td className="w-[250px] font-semibold">Total Price</td>
                        <td>:</td>
                        <td className="font-semibold">
                          {numberToRupiah(totalPrice)}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <button
                    type="submit"
                    className="inline-block mt-5 w-full py-3 bg-secondary text-center hover:opacity-70"
                  >
                    Pay
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
