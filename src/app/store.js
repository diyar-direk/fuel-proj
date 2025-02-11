import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slice";

export default configureStore({ reducer: { app: appSlice.reducer } });
