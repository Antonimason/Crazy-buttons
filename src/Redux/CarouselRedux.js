// Importing createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Creating a slice of state for buttonSelection
export const CarouselRedux = createSlice({
    name: 'carousels', // Name of the slice
    initialState: {
        currentPosition: 0,
        copied: false, // Initial state for copied property
        clipboard: false, // Initial state for clipboard property
    },
    reducers: {
        forward: (state, action) =>{
            state.currentPosition === 2 ?  state.currentPosition = 0 : state.currentPosition = state.currentPosition + action.payload;
        },
        backward: (state,action) =>{
            state.currentPosition <= 0 ?  state.currentPosition = 2 : state.currentPosition = state.currentPosition - action.payload;

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
export const {forward, backward, copy, clipboards } = CarouselRedux.actions;

// Exporting reducer function
export default CarouselRedux.reducer;