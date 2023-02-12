import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
