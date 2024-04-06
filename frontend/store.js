// import necessary modules
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categorySlice from "./slices/categorySlice";

// configure the Redux store with combineReducers
export const store = configureStore({
  reducer: {
    // assign cartSlice reducer to 'cart' slice of the store
    cart: cartSlice,
    // assign categorySlice reducer to 'category' slice of the store
    category: categorySlice,
  },
});
