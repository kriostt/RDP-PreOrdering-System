// import necessary module
import { createSlice } from "@reduxjs/toolkit";

// initial state for the cart slice
const initialState = {
  items: [],
};

// create a cart slice using createSlice function
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // reducer function to add an item to the cart
    addToCart: (state, action) => {
      // add the payload (item) to the items array
      state.items = [...state.items, action.payload];
    },

    // reducer function to remove an item from the cart
    removeFromCart: (state, action) => {
      // create a copy of the items array
      let newCart = [...state.items];

      // find the index of the item to be removed
      let itemIndex = state.items.findIndex(
        (item) => item._id == action.payload.id
      );

      // remove the item from the array
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Can't remove item that is not added to cart");
      }

      // update the state with the new items array
      state.items = newCart;
    },

    // reducer function to empty the cart
    emptyCart: (state, action) => {
      // set the items array to an empty array
      state.items = [];
    },
  },
});

// action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// ---selectors to access cart state---
// selects all items in the cart
export const selectCartItems = (state) => state.cart.items;

// selects items by ID
export const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item._id == id);

// calculates total price of items in the cart
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);

// export the reducer function
export default cartSlice.reducer;
