// Importing necessary functions and modules from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing reducers for different slices of state
import userReducer from './buttonSelection'; // Importing reducer for user selection
import sizeButton from './builtButton'; // Importing reducer for button size
import createButton from './CrazyButton'; // Importing reducer for button creation
import carousels from './CarouselRedux';
import copyCode from './CopyCode';
import modalRedux from './modalRedux';

// Configuring the Redux store with combined reducers
export const store = configureStore({
    reducer: {
        CreateButton: createButton, // Setting reducer for button creation slice of state
        buttons: userReducer, // Setting reducer for user selection slice of state
        zise: sizeButton, // Setting reducer for button size slice of state
        carousel: carousels, // Setting reducer for carousel slice of staste
        copy: copyCode,
        modals: modalRedux
    }
});