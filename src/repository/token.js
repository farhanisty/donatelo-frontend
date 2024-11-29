import axios from "axios";

const baseApi = import.meta.env.VITE_BASE_API;

export async function validateToken({ token }) {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseApi}/validate-token`,
      headers: {
        "content-type": "application/json",
      },
      data: {
        token,
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
}
