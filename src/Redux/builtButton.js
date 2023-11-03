import {createSlice} from '@reduxjs/toolkit';

export const builtButton = createSlice({
    name: 'buttons',
    initialState: {
        list:{
            name:"Click",
            family: "Open Sans",
            size:"40px",
            padding:["20px","20px"],
            color:"black",
            background:"lightblue",
            radius:"none",
            bold:"normal",
            italic:"normal",
            onOffBorder: false,
            border: ["0px solid","black"],
            Upcase: "capitalize",
            onoffShadow: false,
            boxShadow:["0px","0px","0px","0px","black"],
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
            action.payload === true ? state.list.onOffBorder = true : state.list.onOffBorder = false; state.list.border= ["0px solid","black"];
        },
        borderColor: (state,action) => {
            state.list.border[1] = action.payload;
        },
        borderSize: (state,action) => {
            state.list.border[0]= `${action.payload}px solid`;
        },
        toUpcase : (state,action) => {
            action.payload === true ? state.list.Upcase = "uppercase" : state.list.Upcase = "capitalize";
        },
        isShadow: (state,action) => {
            action.payload === true ? state.list.onoffShadow = true : state.list.onoffShadow = false; state.list.boxShadow = ["0px","0px","0px","0px","black"];
        },
        XShadow: (state,action) =>  {
            state.list.boxShadow[0] = `${action.payload}px`;
        },
        YShadow: (state,action) =>  {
            state.list.boxShadow[1] = `${action.payload}px`;
        },
        blur: (state,action) =>  {
            state.list.boxShadow[2] = `${action.payload}px`;
        },
        spread: (state,action) =>  {
            state.list.boxShadow[3] = `${action.payload}px`;
        },
        shadowColor: (state,action) => {
            state.list.boxShadow[4] = action.payload;
        },
    },
});
export const {pYValue,pXValue,nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold,isItalic,isBorder,borderColor,borderSize,toUpcase,isShadow,XShadow,YShadow,blur,spread,shadowColor} = builtButton.actions;

export default builtButton.reducer;