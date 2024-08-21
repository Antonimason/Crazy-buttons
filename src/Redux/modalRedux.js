import { createSlice } from '@reduxjs/toolkit';

export const modalRedux = createSlice({
  name: 'modals',
  initialState: {
    modalShown: false,
    modal_style: false,
  },
  reducers: {
    updateModalContent: (state, action) => {
      state.modalShown = action.payload;
    },
    modalStyle: (state, action) => {
        state.modal_style = action.payload;
      },
  },
});

export const { updateModalContent, modalStyle } = modalRedux.actions;

export default modalRedux.reducer;
