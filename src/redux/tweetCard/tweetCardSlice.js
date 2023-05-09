import { createSlice } from '@reduxjs/toolkit';

const tweetCardInitialState = {
  numberPage: 1,
  totalAmount: 18,
};
const tweetCardSlice = createSlice({
  name: 'tweetsCard',
  initialState: tweetCardInitialState,
  reducers: {
    addPage(state) {
      state.numberPage += 1;
    },
  },
});
export const { addPage, activeButton } = tweetCardSlice.actions;
export const tweetCardReducer = tweetCardSlice.reducer;
