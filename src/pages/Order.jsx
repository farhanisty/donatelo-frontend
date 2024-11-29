import Navbar from "./../components/Navbar.jsx";
import Container from "./../layout/Container.jsx";
import numberToRupiah from "./../service/numberToRupiah.js";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { validateToken } from "./../repository/token.js";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuUserCircle } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";

function InfoItem({ label, value }) {
  return (
    <li className="text-slate-600">
      {label}: <span className="text-black">{value}</span>
    </li>
  );
}

function InfoHeader({ children }) {
  return (
    <h1 className="font-semibold text-sm md:text-base mb-3">{children}</h1>
  );
}

export default function Order() {
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
  const inputTokenRef = useRef(null);
  const [validateAttemptMessage, setValidateAttemptMessage] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [orderDetail, setOrderDetail] = useState({});

  const { mutate } = useMutation(validateToken, {
    onSuccess: (data) => {
      if (data.data.status === false) {
        setValidateAttemptMessage("Token is invalid");
      } else {
        setOrderDetail(data.data.data);
        setIsValidToken(true);
      }
    },
  });

  const handleSubmitToken = (e) => {
    e.preventDefault();
    mutate({
      token: inputTokenRef.current.value,
    });
  };

  return (
    <>
      <Navbar solid={true} />
      <header
        className="relative top-0 w-screen bg-background"
        style={{
          height: "calc(100vh - 50px)",
        }}
      >
        <Container>
          <h1 className="font-semibold uppercase text-2xl mb-5">Order</h1>
          {isValidToken ? (
            <>
              <div className="w-full flex flex-col md:flex-row gap-10 md:gap-5">
                <div className="flex-1">
                  <InfoHeader>
                    <LuUserCircle className="inline-block text-base md:text-xl" />{" "}
                    Customer
                  </InfoHeader>

                  <ul>
                    <InfoItem label="Name" value={orderDetail.customer.name} />
                    <InfoItem
                      label="Email"
                      value={orderDetail.customer.email}
                    />
                  </ul>
                </div>
                <div className="flex-1">
                  <InfoHeader>
                    <IoMdInformationCircleOutline className="inline-block text-xl" />{" "}
                    Detail
                  </InfoHeader>
                  <ul>
                    <li className="text-slate-600">
                      Status:{" "}
                      {orderDetail.status.is_active ? (
                        <span className="text-black text-green-600">
                          active
                        </span>
                      ) : (
                        <span className="text-black text-red-600">
                          exchanged
                        </span>
                      )}
                    </li>
                    {!orderDetail.status.is_active && (
                      <li className="text-slate-600">
                        Exchange Date:{" "}
                        <span className="text-black">
                          {orderDetail.status.exchange_date}
                        </span>
                      </li>
                    )}
                    <InfoItem
                      label="Purchase Date"
                      value={orderDetail.purchase_date}
                    />
                    <InfoItem
                      label="Total Price"
                      value={numberToRupiah(orderDetail.payment_amount)}
                    />
                  </ul>

                  {orderDetail.status.is_active ? (
                    <p className="mt-5">
                      <span className="font-bold">Note</span>: Immediately use
                      this token at the nearest Donatelo store.
                    </p>
                  ) : (
                    <p className="mt-5">Thank you for ordering Donatello!</p>
                  )}
                </div>
              </div>

              <div className="border-t py-5 my-10">
                <InfoHeader>
                  <IoFastFoodOutline className="inline-block text-xl" /> Menus
                </InfoHeader>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-transparent border">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Menu
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetail.orders.map((item, key) => {
                      return (
                        <tr key={key} className="border text-black">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            <img
                              src={`${baseImageUrl}/${item.menu.image}`}
                              width="80"
                              alt="donut"
                            />
                          </th>
                          <td className="px-6 py-4">{item.menu.name}</td>
                          <td className="px-6 py-4">{item.quantity}</td>
                          <td className="px-6 py-4">
                            {numberToRupiah(item.menu.price * item.quantity)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <button
                className="px-6 py-3 bg-primary text-white rounded hover:opacity-70"
                onClick={() => {
                  setValidateAttemptMessage("");
                  setIsValidToken(false);
                  setOrderDetail({});
                }}
              >
                back
              </button>
            </>
          ) : (
            <>
              {validateAttemptMessage && (
                <p className="text-red-600 mb-3">{validateAttemptMessage}</p>
              )}
              <form onSubmit={handleSubmitToken}>
                <label htmlFor={inputTokenRef}>Insert your token: </label>
                <textarea
                  className="my-3 border border-black min-h-[500px] md:min-h-[200px] p-2 rounded block w-full resize-none"
                  ref={inputTokenRef}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-white rounded hover:opacity-70"
                >
                  check
                </button>
              </form>
            </>
          )}
        </Container>
      </header>
    </>
  );
}
