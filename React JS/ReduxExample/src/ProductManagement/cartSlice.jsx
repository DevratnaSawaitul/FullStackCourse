import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, name, price, quantity }
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }

      state.totalItems += 1;
      state.totalCost += price;
    },
    removeCart: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }

        state.totalItems = Math.max(0, state.totalItems - 1);
        state.totalCost = Math.max(0, state.totalCost - price);
      }
    },
  },
});

// export so we can use
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
