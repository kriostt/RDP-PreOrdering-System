import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categorySlice from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
  },
});