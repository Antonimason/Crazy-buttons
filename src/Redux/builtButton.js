import {createSlice} from '@reduxjs/toolkit';

export const builtButton = createSlice({
    name: 'buttons',
    initialState: {
        list:{
            width:"35px",
            height:"20px",
            padding: "10px"
        }, //a list which it will be changed
    },
    reducers:{
        wValue: (state,action) =>  {
            state.list.width = `${action.payload}px`;
        },
        hValue: (state,action) =>  {
            state.list.height = `${action.payload}px`;
        },
        pValue: (state,action) =>  {
            state.list.height = `${action.payload}px`;
        }
    },
});
export const {wValue,hValue,pValue} = builtButton.actions;

export default builtButton.reducer;