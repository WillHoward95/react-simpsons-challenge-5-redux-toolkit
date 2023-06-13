import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSimpsons: (state, action) => {
      state.simpsons = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort, setSearch, setSimpsons } = counterSlice.actions;

export const selectSimpsons = (state) => state.counter.simpsons;
export const selectSearch = (state) => state.counter.search;
export const selectSort = (state) => state.counter.sort;

export default counterSlice.reducer;
