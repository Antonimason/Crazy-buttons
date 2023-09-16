import {createSlice} from '@reduxjs/toolkit';

export const CrazyButton = createSlice({
    name: 'CrazyButton',
    initialState: {
        displayOn:true, //a list which it will be changed
    },
    reducers:{
        display: (state,action) =>  {
            state.displayOn = action.payload;
        }
    },
});
export const { display } = CrazyButton.actions;

export default CrazyButton.reducer;