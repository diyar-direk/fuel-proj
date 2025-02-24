import { createSlice } from "@reduxjs/toolkit";
import { vehicle } from "src/constants/SectionsInfo";
import { LocalStorageHelper } from "src/utils/LocalStorageHelper";

export const appSlice = createSlice({
  name: "app",
  initialState: () => {
    const state = {
      loggedIn: false,
      roles: [],
      currentSection:
        LocalStorageHelper.getItem("currentSection") || vehicle.name,
    };

    return state;
  },
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = payload;
    },
    changeCurrentSection: (state, { payload }) => {
      state.currentSection = payload;
      LocalStorageHelper.setItem("currentSection", payload);
    },
  },
});

export const { changeCurrentSection, login } = appSlice.actions;

export const currentSectionSelector = (state) => state.app.currentSection;
