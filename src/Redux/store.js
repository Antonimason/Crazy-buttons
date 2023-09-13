import { configureStore } from "@reduxjs/toolkit";
import userReducer from './buttonSelection';
import sizeButton from './builtButton';

export const store = configureStore({
    reducer: {
      buttons:userReducer,
      zise:sizeButton
    }
});