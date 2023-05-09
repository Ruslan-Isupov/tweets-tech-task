import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./authOperations";

const tweetsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  // isActive: false,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authSlice = createSlice({
  name: "auth",
  initialState: tweetsInitialState,
  reducers: {
    activeButton(state, action) {
      for (const item of state.items) {
        console.log(item.id);
        console.log(action.payload);
        if (item.id === action.payload) {
          item.isActive = !item.isActive;
          if (item.isActive) {
            item.followers += 1;
          } else {
            item.followers -= 1;
          }

          break;
        }
      }
    },
  },
  extraReducers: {
    [fetchTweets.pending]: handlePending,

    [fetchTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const tweets = action.payload.map((item) =>
        Object.assign(item, { isActive: false })
      );

      state.items.push(...tweets);
    },

    [fetchTweets.rejected]: handleRejected,
  },
});
export const { activeButton } = authSlice.actions;
export const tweetsReducer = authSlice.reducer;
