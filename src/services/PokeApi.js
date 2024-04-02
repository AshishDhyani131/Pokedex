import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://pokeapi.co/api/v2";

const createRequest = (url) => ({ url });
export const pokeApi = createApi({
  reducerPath: "PokeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (count) => createRequest(`/pokemon?limit=${count}`),
    }),
    searchPokemon: builder.query({
      query: (pokeName) => createRequest(`/pokemon/${pokeName}`),
    }),
  }),
});

export const { useGetPokemonsQuery, useSearchPokemonQuery } = pokeApi;
