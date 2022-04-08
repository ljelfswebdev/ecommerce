import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const dinosaurExists = state.find((dinosaur) => dinosaur.id === action.payload.id);
      if (dinosaurExists) {
        dinosaurExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const dinosaur = state.find((dinosaur) => dinosaur.quantity === action.payload);
      dinosaur.quantity++;
    },
    decrementQuantity: (state, action) => {
      const dinosaur = state.find((dinosaur) => dinosaur.quantity === action.payload);
      if (dinosaur.quantity === 1) {
        const index = state.findIndex((dinosaur) => dinosaur.quantity === action.payload);
        state.splice(index, 1);
      } else {
        dinosaur.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((dinosaur) => dinosaur.quantity === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;