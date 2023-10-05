import {createSlice} from '@reduxjs/toolkit';

export const builtButton = createSlice({
    name: 'buttons',
    initialState: {
        list:{
            name:"Click",
            family: "Open Sans",
            size:"25px",
            padding:["0px","0px"],
            color:"black",
            background:"lightblue",
            radius:"none",
            bold:"normal",
            italic:"normal",
            onOffBorder: false,
            borderColor: "black",
            borderSize: "none"
        }, //a list which it will be changed
    },
    reducers:{
        nameButton: (state,action) => {
            state.list.name = action.payload;
        },
        fontfamily: (state,action) => {
            state.list.family = action.payload;
        },
        fontsize: (state,action) => {
            state.list.size = `${action.payload}px`;
        },
        pXValue: (state,action) =>  {
            state.list.padding[1] = `${action.payload}px`;
        },
        pYValue: (state,action) =>  {
            state.list.padding[0] = `${action.payload}px`;
        },
        fontcolor: (state,action) => {
            state.list.color = action.payload;
        },
        bgcolor: (state,action) => {
            state.list.background = action.payload;
        },
        rad: (state,action) => {
            state.list.radius = `${action.payload}px`;
        },
        isBold: (state,action) => {
            action.payload === true ? state.list.bold = "bold" : state.list.bold = "normal";
        },
        isItalic: (state,action) => {
            action.payload === true ? state.list.italic = "italic" : state.list.italic = "normal";
        },
        isBorder: (state,action) => {
            action.payload === true ? state.list.onOffBorder = true : state.list.onOffBorder = false; state.list.borderSize="none";
        },
        borderColor: (state,action) => {
            state.list.borderColor = action.payload;
        },
        borderSize: (state,action) => {
            state.list.borderSize = `${action.payload}px solid`;
        }
    },
});
export const {pYValue,pXValue,nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold,isItalic,isBorder,borderColor,borderSize} = builtButton.actions;

export default builtButton.reducer;