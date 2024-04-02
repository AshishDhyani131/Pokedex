import { createSlice } from "@reduxjs/toolkit";

const pokeSearchSlice = createSlice({
  name: "pokeSearch",
  initialState: {
    value: "",
  },
  reducers: {
    pokeSearch(state, action) {
      state.value = action.payload;
    },
  },
});

export const { pokeSearch } = pokeSearchSlice.actions;
export default pokeSearchSlice.reducer;
