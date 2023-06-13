import { configureStore } from "@reduxjs/toolkit";
import simpsonsReducer from "../features/simpsons/simpsonsSlice";

export const store = configureStore({
  reducer: {
    simpsons: simpsonsReducer,
  },
});
