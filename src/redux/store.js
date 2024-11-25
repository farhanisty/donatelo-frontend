import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  console.log("STORE CHANGED : ", store.getState());
});

export default store;
