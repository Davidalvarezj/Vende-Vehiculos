import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userAuth: null },
  reducers: {
    addUser: (state, action) => {
      state.userAuth = action.payload;

      console.log("userState--", state);
      console.log("user-action.payload--", action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
