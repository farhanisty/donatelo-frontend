import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("carts")).data,
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

export const { addToCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;
