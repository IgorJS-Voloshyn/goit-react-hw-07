import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
// export const filterSelector = (state) => state.filter;
export const selectNameFilter = (state) => state.filter.name;
export const { changeFilter } = filterSlice.actions;
