import { createSlice } from '@reduxjs/toolkit';

export const CopyCode = createSlice({
    name: 'copy',
    initialState:{
        copied: false,
        clipboard: false,
    },
    reducers:{
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

export const {copy, clipboards} = CopyCode.actions;

export default CopyCode.reducer;