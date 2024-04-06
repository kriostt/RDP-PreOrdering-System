// import necessary module
import { createSlice } from "@reduxjs/toolkit";

// initial state for the category slice
const initialState = {
  category: null,
};

// create a category slice using createSlice function
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // reducer function to set the current category
    setCategory: (state, action) => {
      // set the category to the payload received
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;

// selector to access the current category
export const selectCategory = (state) => state.category.category;

// export the reducer function
export default categorySlice.reducer;
