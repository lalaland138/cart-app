import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { authFlag: false },
  reducers: {
    authorise: {
      reducer: (state, action) => {
        if (
          action.payload.username === "admin" &&
          action.payload.password === "admin"
        ) {
          console.log("User will be able to login");
          return { ...state, authFlag: true };
        } else {
          alert("Username & Password Wrong");
          return { ...state, authFlag: false };
        }
      },
    },
  },
});

export const { authorise } = authSlice.actions;
export default authSlice.reducer;
