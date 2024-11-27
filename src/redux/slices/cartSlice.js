import { createSlice } from "@reduxjs/toolkit";

const initialCartsState = JSON.parse(localStorage.getItem("carts"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: initialCartsState ? initialCartsState.data : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id,
      );

      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    clearCart: (state) => {
      localStorage.removeItem("carts");
      state.data = [];
    },

    decrementCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id == action.payload.id,
      );

      if (itemInCart) {
        itemInCart.qty -= action.payload.qty;
      }

      if (itemInCart.qty <= 0) {
        const newArray = state.data.filter((item) => {
          return item != itemInCart;
        });

        state.data = newArray;
      }
    },
  },
});

export const { addToCart, decrementCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
