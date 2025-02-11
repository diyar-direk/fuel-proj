import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: () => {
    const state = { loggedIn: false, roles: [] };

    return state;
  },
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});
