import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: '',
  reducers: {
    update: (state, action) => action.payload,
  },
});

export const { update } = exampleSlice.actions;
export default exampleSlice.reducer;
