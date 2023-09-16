import {createSlice} from '@reduxjs/toolkit';
import buttonList from './buttons.json';

export const buttonSelection = createSlice({
    name: 'buttons',
    initialState: {
        list:buttonList.buttons, //a list which it will be changed
        copied:false,
    },
    reducers:{
        valor: (state,action) =>  {
            state.list = action.payload;
        },
        copy: (state,action)=> {
            state.copied = action.payload;
            navigator.clipboard.writeText(state.copied)
        }
    },
});
export const { valor, copy } = buttonSelection.actions;

export default buttonSelection.reducer;

