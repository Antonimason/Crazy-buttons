import {createSlice} from '@reduxjs/toolkit';

export const builtButton = createSlice({
    name: 'buttons',
    initialState: {
        list:{
            name:"Click",
            family: "Open Sans",
            size:"10px",
            padding:["0px","0px"],
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
        }
    },
});
export const {pYValue,pXValue,nameButton,fontsize,fontfamily} = builtButton.actions;

export default builtButton.reducer;