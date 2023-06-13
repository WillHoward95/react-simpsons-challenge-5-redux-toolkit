import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const simpsonsSlice = createSlice({
  name: "simpsons",
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
    deleteItem: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      state.simpsons.splice(indexOf, 1);
    },
    toggleLiked: (state, action) => {
      const indexOf = state.simpsons.findIndex((item) => {
        return item.id === action.payload;
      });

      state.simpsons[indexOf].liked = !state.simpsons[indexOf].liked;
    },
  },
});

export const { toggleLiked, deleteItem, setSort, setSearch, setSimpsons } =
  simpsonsSlice.actions;

export const selectSimpsons = (state) => state.simpsons.simpsons;
export const selectSearch = (state) => state.simpsons.search;
export const selectSort = (state) => state.simpsons.sort;

export default simpsonsSlice.reducer;
