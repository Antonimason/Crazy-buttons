import {createSlice} from '@reduxjs/toolkit';

export const builtButton = createSlice({
    name: 'buttons',
    initialState: {
        list:{
            name:"Click",
            family: "Open Sans",
            size:"10px",
            padding:["0px","0px"],
            color:"black",
            background:"white",
            radius:"none",
            bold:"normal",
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
            state.list.bold = action.payload;
        }
    },
});
export const {pYValue,pXValue,nameButton,fontsize,fontfamily,fontcolor,bgcolor,rad,isBold} = builtButton.actions;

export default builtButton.reducer;