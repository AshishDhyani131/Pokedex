import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import PokeCard from "./PokeCard";

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=4"
        );
        const { results } = data;

        let finalst = [];
        for (let i = 0; i < results.length; i++) {
          const pokeRes = await axios.get(results[i].url);
          const pokeData = pokeRes.data;
          const url = pokeData.sprites.other.dream_world.front_default;
          finalst.push({ id: pokeData.id, name: pokeData.name, imgSrc: url });
        }
        setPokeList(finalst);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
    })();
  }, []);
  return (
    <main className=" bg-white m-2 rounded py-3 px-2">
      <div className="w-full h-[85%] py-4 px-2">
        {isError ? (
          <div>Error in loading</div>
        ) : isLoading ? (
          <Loader></Loader>
        ) : (
          <div className=" grid grid-cols-2 gap-2">
            {pokeList.map((pokemon) => (
              <PokeCard details={pokemon} key={pokemon.id}></PokeCard>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default PokeList;
