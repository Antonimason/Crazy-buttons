// Importing createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
// Importing buttonList from buttons.json file
import buttonList from './buttons.json';

// Creating a slice of state for buttonSelection
export const buttonSelection = createSlice({
    name: 'buttons', // Name of the slice
    initialState: {
        buttonList: buttonList.buttons, // Initial list of buttons loaded from buttons.json
        loaderList: buttonList.loaders,
        carouselList: buttonList.carousel,
        cardList: buttonList.cards,
        copied: false, // Initial state for copied property
        clipboard: false, // Initial state for clipboard property
    },
    reducers: {
        // Reducer function to update list property with new button list
        valor: (state, action) => {
            state.buttonList = action.payload; // Update list with the value passed in action payload
        },
    },
});

// Exporting action creators
export const { valor } = buttonSelection.actions;

// Exporting reducer function
export default buttonSelection.reducer;