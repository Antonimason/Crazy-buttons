import { configureStore } from "@reduxjs/toolkit";
import userReducer from './buttonSelection';

export const store = configureStore({
    reducer: {
      buttons:userReducer,
    }
});