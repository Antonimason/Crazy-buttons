import { createSlice } from '@reduxjs/toolkit';

export const modalRedux = createSlice({
  name: 'modals',
  initialState: {
    modalShown: false,
    modal_style: false,
    activated: false,
    deactivated: false,
  },
  reducers: {
    modalActive: (state, action) => {
      state.activated = action.payload;
    },
    modalDeactivated: (state, action) => {
      state.deactivated = action.payload;
    },
    updateModalContent: (state, action) => {
      state.modalShown = action.payload;
    },
    modalStyle: (state, action) => {
        state.modal_style = action.payload;
      },
  },
});

export const { modalActive, modalDeactivated, updateModalContent, modalStyle } = modalRedux.actions;

export default modalRedux.reducer;
