import { createSlice } from '@reduxjs/toolkit';

export const codeLogRedux = createSlice({
    name: 'codeLog',
    initialState:{
        isActive: false,
        contentData : {
            htmlCode:"",
            cssCode: "",
            jsCode: ""
        },
        languajeSelected: "html",  
    },
    reducers:{
        active: (state, action) => {
            state.isActive = action.payload;
        },
        // Reducer function to update clipboard property
        contentProvider: (state, action) => {
            if (state.isActive){
                state.contentData.htmlCode = action.payload.htmlCode;
                state.contentData.cssCode = action.payload.cssCode;
                state.contentData.jsCode = ""; // Clean up the previous content of jsCode
                if(action.payload.jsCode){
                    state.contentData.jsCode = action.payload.jsCode;
                }
                state.contentData.content = action.payload.content;
            }
        },
        languaje: (state, action) => {
            state.languajeSelected = action.payload;
        },
    },
});

export const {active, contentProvider, languaje} = codeLogRedux.actions;

export default codeLogRedux.reducer;