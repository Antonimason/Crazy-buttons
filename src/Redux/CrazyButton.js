// Importing createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Creating a slice of state for CrazyButton
export const CrazyButton = createSlice({
    name: 'CrazyButton', // Name of the slice
    initialState: {
        displayOn: "Home", // Initial state for displayOn property
        isCollapseButton: false, // Initial state for isCollapseButton property
    },
    reducers: {
        // Reducer function to update displayOn property
        display: (state, action) => {
            state.displayOn = action.payload; // Update displayOn with the value passed in action payload
        },
        // Reducer function to toggle isCollapseButton property
        collapse: (state, action) => {
            switch (action.payload) {
                case "button":
                    // Toggle the value of isCollapseButton property
                    state.isCollapseButton === true ? state.isCollapseButton = false : state.isCollapseButton = true;
                    break;
                default:
                    console.log("Sorry this option is not available"); // Log message for unsupported payload
            }
        },
    },
});

// Exporting action creators
export const { display, collapse } = CrazyButton.actions;

// Exporting reducer function
export default CrazyButton.reducer;
