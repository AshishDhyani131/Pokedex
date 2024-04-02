import React, { useEffect } from "react";
import PokeCard from "./PokeCard";

import {
  useGetPokemonsQuery,
  useSearchPokemonQuery,
} from "../services/PokeApi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const PAGE_SIZE = 6;

const SearchResults = () => {
  const searchPokemon = useSelector((state) => state.pokeSearch);
  const { data: pokeList, isLoading, error } = useGetPokemonsQuery(777);
  const [currPage, setCurrPage] = useState(1);
  useEffect(() => {
    setCurrPage(1);
  }, [searchPokemon.value]);
  if (isLoading) return <p>Loading</p>;
  const filteredList = pokeList.results.filter((pokemon) =>
    pokemon.name.startsWith(searchPokemon.value.toLowerCase())
  );
  const lastPage = Math.ceil(filteredList.length / PAGE_SIZE);
  console.log(lastPage);
  const startIndex = (currPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedList = filteredList.slice(startIndex, endIndex);
  return (
    <main className="mt-8 mx-1 mb-1 bg-white rounded-lg py-4 px-2">
      <div className=" grid grid-cols-3 gap-2">
        {paginatedList.map((pokemon, index) => (
          <PokeCard details={pokemon} key={index}></PokeCard>
        ))}
      </div>
      <div className=" flex justify-around mt-4">
        {currPage <= 1 ? null : (
          <div
            className=" p-2 rounded-full hover:bg-neutral-200 duration-300"
            onClick={() => setCurrPage((currPage) => currPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
        )}
        {currPage >= lastPage ? null : (
          <div
            className="p-2 rounded-full hover:bg-neutral-200 duration-300"
            onClick={() => setCurrPage((currPage) => currPage + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
