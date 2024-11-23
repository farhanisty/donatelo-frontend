import axios from "axios";

export async function getDonuts() {
  const baseApi = import.meta.env.VITE_BASE_API;

  const response = await axios.get(`${baseApi}/menu`);
  return response.data.data;
}
