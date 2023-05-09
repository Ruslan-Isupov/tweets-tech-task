import { combineReducers } from "@reduxjs/toolkit";
import { tweetsReducer } from "./auth/authSlice";
import { tweetCardReducer } from "./tweetCard/tweetCardSlice";

export const rootReducer = combineReducers({
  auth: tweetsReducer,
  tweetCard: tweetCardReducer,
});
