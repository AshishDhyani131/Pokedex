import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prevPage: null,
  nextPage: null,
};

const goToPageSlice = createSlice({
  name: "goToPage",
  initialState,
  reducers: {
    pageChange(state, action) {
      state.prevPage = action.payload.previous;
      state.nextPage = action.payload.next;
    },
  },
});

export const { pageChange } = goToPageSlice.actions;

export default goToPageSlice.reducer;
