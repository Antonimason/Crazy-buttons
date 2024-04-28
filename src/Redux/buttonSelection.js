// Importing createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
// Importing buttonList from buttons.json file
import buttonList from './buttons.json';

// Creating a slice of state for buttonSelection
export const buttonSelection = createSlice({
    name: 'buttons', // Name of the slice
    initialState: {
        list: buttonList.buttons, // Initial list of buttons loaded from buttons.json
        copied: false, // Initial state for copied property
        clipboard: false, // Initial state for clipboard property
    },
    reducers: {
        // Reducer function to update list property with new button list
        valor: (state, action) => {
            state.list = action.payload; // Update list with the value passed in action payload
        },
        // Reducer function to update copied property and copy text to clipboard
        copy: (state, action) => {
            state.copied = action.payload; // Update copied with the value passed in action payload
            navigator.clipboard.writeText(state.copied); // Write text to clipboard using the copied value
        },
        // Reducer function to update clipboard property
        clipboards: (state, action) => {
            state.clipboard = action.payload; // Update clipboard with the value passed in action payload
        },
    },
});

// Exporting action creators
export const { valor, copy, clipboards } = buttonSelection.actions;

// Exporting reducer function
export default buttonSelection.reducer;