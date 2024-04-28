// Importing createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Creating a slice of state for builtButton
export const builtButton = createSlice({
    name: 'buttons', // Name of the slice
    initialState: {
        list: {
            // Initial properties for a button
            name: "Click", // Button text
            family: "Open Sans", // Font family
            size: "40px", // Font size
            padding: ["20px", "20px"], // Padding (top and bottom, left and right)
            color: "#000000", // Font color
            background: "#00FF88", // Background color
            radius: "25px", // Border radius
            bold: "normal", // Font weight (normal or bold)
            italic: "normal", // Font style (normal or italic)
            onOffBorder: false, // Toggle for border
            border: ["0px solid", "#000000"], // Border properties (size and color)
            Upcase: "capitalize", // Text transformation (capitalize or uppercase)
            onoffShadow: false, // Toggle for shadow
            boxShadow: ["0px", "0px", "0px", "0px", "#000000"], // Shadow properties (x-offset, y-offset, blur, spread, color)
        }, // Initial button properties
    },
    reducers: {
        // Reducer functions to update button properties
        nameButton: (state, action) => {
            state.list.name = action.payload; // Update button text
        },
        fontfamily: (state, action) => {
            state.list.family = action.payload; // Update font family
        },
        fontsize: (state, action) => {
            state.list.size = `${action.payload}px`; // Update font size
        },
        pXValue: (state, action) => {
            state.list.padding[1] = `${action.payload}px`; // Update horizontal padding
        },
        pYValue: (state, action) => {
            state.list.padding[0] = `${action.payload}px`; // Update vertical padding
        },
        fontcolor: (state, action) => {
            state.list.color = action.payload; // Update font color
        },
        bgcolor: (state, action) => {
            state.list.background = action.payload; // Update background color
        },
        rad: (state, action) => {
            state.list.radius = `${action.payload}px`; // Update border radius
        },
        isBold: (state, action) => {
            // Toggle font weight
            action.payload === true ? state.list.bold = "bold" : state.list.bold = "normal";
        },
        isItalic: (state, action) => {
            // Toggle font style
            action.payload === true ? state.list.italic = "italic" : state.list.italic = "normal";
        },
        isBorder: (state, action) => {
            // Toggle border and set default border color
            action.payload === true ? state.list.onOffBorder = true : state.list.onOffBorder = false; state.list.border = ["0px solid", "#000000"];
        },
        borderColor: (state, action) => {
            state.list.border[1] = action.payload; // Update border color
        },
        borderSize: (state, action) => {
            state.list.border[0] = `${action.payload}px solid`; // Update border size
        },
        toUpcase: (state, action) => {
            // Toggle text transformation
            action.payload === true ? state.list.Upcase = "uppercase" : state.list.Upcase = "capitalize";
        },
        isShadow: (state, action) => {
            // Toggle shadow and set default shadow color
            action.payload === true ? state.list.onoffShadow = true : state.list.onoffShadow = false; state.list.boxShadow = ["0px", "0px", "0px", "0px", "#000000"];
        },
        XShadow: (state, action) => {
            state.list.boxShadow[0] = `${action.payload}px`; // Update x-offset for shadow
        },
        YShadow: (state, action) => {
            state.list.boxShadow[1] = `${action.payload}px`; // Update y-offset for shadow
        },
        blur: (state, action) => {
            state.list.boxShadow[2] = `${action.payload}px`; // Update blur radius for shadow
        },
        spread: (state, action) => {
            state.list.boxShadow[3] = `${action.payload}px`; // Update spread radius for shadow
        },
        shadowColor: (state, action) => {
            state.list.boxShadow[4] = action.payload; // Update shadow color
        },
    },
});

// Exporting action creators
export const { pYValue, pXValue, nameButton, fontsize, fontfamily, fontcolor, bgcolor, rad, isBold, isItalic, isBorder, borderColor, borderSize, toUpcase, isShadow, XShadow, YShadow, blur, spread, shadowColor } = builtButton.actions;

// Exporting reducer function
export default builtButton.reducer;
