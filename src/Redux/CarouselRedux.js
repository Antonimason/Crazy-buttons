// Importing createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Creating a slice of state for buttonSelection
export const CarouselRedux = createSlice({
    name: 'carousels', // Name of the slice
    initialState: {
        currentPosition: 0, // Current position of the carousel
    },
    reducers: {
        // Reducer function for moving the carousel forward
        forward: (state, action) =>{
            // If currentPosition is at the last position, reset to the first position, else move forward
            state.currentPosition === 2 ?  state.currentPosition = 0 : state.currentPosition = state.currentPosition + action.payload;
        },
        // Reducer function for moving the carousel backward
        backward: (state,action) =>{
            // If currentPosition is at the first position, move to the last position, else move backward
            state.currentPosition <= 0 ?  state.currentPosition = 2 : state.currentPosition = state.currentPosition - action.payload;
        },
    },
});

// Exporting action creators
export const {forward, backward} = CarouselRedux.actions;

// Exporting reducer function
export default CarouselRedux.reducer;