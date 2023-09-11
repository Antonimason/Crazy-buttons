import {createSlice} from '@reduxjs/toolkit';

export const buttonSelection = createSlice({
    name: 'buttons',
    initialState: {
        list:[] //a list which it will be changed
    },
    reducers:{
        valor: (state,action) =>  {
            state.list = action.payload;
        }
    },
});
export const {valor} = buttonSelection.actions;

export default buttonSelection.reducer;

