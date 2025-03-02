import { createSlice } from "@reduxjs/toolkit";
import { vehicle } from "src/constants/SectionsInfo";
import { AuthHelper } from "src/utils/AuthHelper";
import { LocalStorageHelper } from "src/utils/LocalStorageHelper";
import { axiosInstance } from "./axios";

export const appSlice = createSlice({
  name: "app",
  initialState: () => {
    const state = {
      accessToken: null,
      loggedIn: false,
      roles: [],
      currentSection:
        LocalStorageHelper.getItem("currentSection") || vehicle.name,
    };

    state.accessToken = AuthHelper.getAccesssToken();

    state.loggedIn = !!state.accessToken;

    return state;
  },
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = true;

      state.accessToken = payload.access;

      AuthHelper.setAccessToken(payload.access);

      axiosInstance.defaults.headers.Authorization = `Bearer ${payload.access}`;
    },
    logout: (state) => {
      state.loggedIn = false;

      state.roles = [];

      state.accessToken = null;

      AuthHelper.removeAccessToken();
    },
    changeCurrentSection: (state, { payload }) => {
      state.currentSection = payload;

      LocalStorageHelper.setItem("currentSection", payload);
    },
  },
});

export const { changeCurrentSection, login, logout } = appSlice.actions;

export const currentSectionSelector = (state) => state.app.currentSection;

export const loggedInSelector = (state) => state.app.loggedIn;
