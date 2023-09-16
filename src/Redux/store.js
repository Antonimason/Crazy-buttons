import { configureStore } from "@reduxjs/toolkit";
import userReducer from './buttonSelection';
import sizeButton from './builtButton';
import createButton from './CrazyButton';

export const store = configureStore({
    reducer: {
      CreateButton:createButton,
      buttons:userReducer,
      zise:sizeButton
    }
});