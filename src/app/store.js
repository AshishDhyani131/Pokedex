import { configureStore } from "@reduxjs/toolkit";
import { pokeApi } from "../services/PokeApi";
import changePageReducer from "../redux/reducers/goToPageSlice";
import searchPokemonReducer from "../redux/reducers/searchPokemonSlice";
export default configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    pageObj: changePageReducer,
    pokeSearch: searchPokemonReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokeApi.middleware);
  },
});
