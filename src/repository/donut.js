import axios from "axios";

export async function getDonuts() {
  const baseApi = import.meta.env.VITE_BASE_API;

  const response = await axios.get(`${baseApi}/menu`);
  return response.data.data;
}

export async function createPayment({ name, email, orders }) {
  const baseApi = import.meta.env.VITE_BASE_API;

  const response = await axios({
    method: "POST",
    url: `${baseApi}/payment`,
    headers: {
      "content-type": "application/json",
    },
    data: {
      name,
      email,
      orders,
    },
  });

  return response.data;
}
