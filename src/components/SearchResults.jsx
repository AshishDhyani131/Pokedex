import React, { useEffect } from "react";
import PokeCard from "./PokeCard";
import Loader from "./Loader";
import { useState, useContext } from "react";
import { SearchContext } from "../context/context.jsx";

const PAGE_SIZE = 6;
const POKEMON_COUNT = 1302;
const SearchResults = () => {
  const [pokeList, setPokeList] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { searchInput } = useContext(SearchContext);

  let prevPage;
  let nextPage;
  let lastPage = 0;
  if (searchInput === "") {
    lastPage = Math.ceil(POKEMON_COUNT / PAGE_SIZE) - 1;
  }
  if (currPage === 0) prevPage = null;
  else
    prevPage = `https://pokeapi.co/api/v2/pokemon?offset=${
      currPage * PAGE_SIZE - PAGE_SIZE
    }&limit=6`;
  nextPage = `https://pokeapi.co/api/v2/pokemon?offset=${
    currPage * PAGE_SIZE + PAGE_SIZE
  }&limit=6`;
  async function fetchPokemon(url) {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const imgUrl = data.sprites.other.dream_world.front_default;
      let finalst = [{ id: data.id, name: data.name, imgSrc: imgUrl }];
      setPokeList(finalst);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  }
  async function fetchPokemons(url) {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let finalst = [];
      for (let i = 0; i < data.results.length; i++) {
        const pokeres = await fetch(data.results[i].url);
        const pokedata = await pokeres.json();
        const url = pokedata.sprites.other.dream_world.front_default;
        finalst.push({ id: pokedata.id, name: pokedata.name, imgSrc: url });
      }
      setPokeList(finalst);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  }
  useEffect(() => {
    if (searchInput !== "") {
      setCurrPage(0);
      fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      return;
    }
    fetchPokemons("https://pokeapi.co/api/v2/pokemon?offset=0&limit=6");
  }, [searchInput]);
  function handlePaginationClick(pageDir) {
    let url;
    if (pageDir === "prev") {
      url = prevPage;
      setCurrPage((prev) => prev - 1);
    } else {
      url = nextPage;
      setCurrPage((prev) => prev + 1);
    }
    fetchPokemons(url);
  }

  return (
    <>
      <div className="w-full h-[85%] py-4 px-2">
        {isError ? (
          <div>Error in loading</div>
        ) : isLoading ? (
          <Loader></Loader>
        ) : (
          <div className=" grid grid-cols-3 gap-2">
            {pokeList.map((pokemon) => (
              <PokeCard details={pokemon} key={pokemon.id}></PokeCard>
            ))}
          </div>
        )}
      </div>
      <div className=" flex justify-around mt-4">
        {currPage === 0 ? null : (
          <div
            className=" p-2 rounded-full hover:bg-neutral-200 duration-300"
            onClick={() => handlePaginationClick("prev")}
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
        {currPage === lastPage ? null : (
          <div
            className="p-2 rounded-full hover:bg-neutral-200 duration-300"
            onClick={() => handlePaginationClick("next")}
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
    </>
  );
};

export default SearchResults;
