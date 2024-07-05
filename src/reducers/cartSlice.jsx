import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { itemList: [] },
  reducers: {
    add: {
      reducer: (state, action) => {
        const { id } = action.payload;
        // Checking if the item exists
        const isItemInCart = state.itemList.find((item) => item?.id === id);
        // If Exists Add the quantitiy else add the item
        if (isItemInCart) {
          return {
            ...state,
            itemList: state.itemList.map((cartItem) =>
              cartItem?.id == id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          };
        } else {
          return {
            ...state,
            itemList: [...state.itemList, { ...action.payload, quantity: 1 }],
          };
        }
      },
      // Preparing the payload to better suit the storage array
      prepare: (value) => {
        return {
          payload: {
            id: value?.id,
            title: value?.title,
            price: value?.price,
          },
        };
      },
    },
    remove: {
      reducer: (state, action) => {
        const { id } = action.payload;
        const isItemInCart = state.itemList.find((item) => item.id === id);
        console.log(isItemInCart);
        if (isItemInCart.quantity === 1) {
          return {
            ...state,
            itemList: state.itemList.filter((cartItem) => cartItem.id !== id),
          };
        } else {
          return {
            ...state,
            itemList: state.itemList.map((cartItem) =>
              cartItem.id === id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            ),
          };
        }
      },
      prepare: (value) => {
        return {
          payload: {
            id: value?.id,
            title: value?.title,
            price: value?.price,
          },
        };
      },
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
