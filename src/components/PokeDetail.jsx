import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { typesColors } from "../utilities/typeMapping";
import Loader from "./Loader";
const PokeDetail = () => {
  const [pokeData, setPokeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  // console.log(typesColors);
  const colorPrimary = pokeData
    ? typesColors[pokeData.types[0].type.name]
    : "white";
  // console.log(pokeData.types);
  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeDetail = await res.json();
        let number = pokeDetail.id;
        if (number <= 9) {
          number = `#00${number}`;
        } else if (number > 9 && number < 99) {
          number = `#0${number}`;
        } else {
          number = `#${number}`;
        }
        setPokeData({
          pokeId: number,
          pokeName: pokeDetail.name,
          types: pokeDetail.types,
          imgSrc: pokeDetail.sprites.other.dream_world.front_default,
        });
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchPokemon();
  }, []);
  return (
    <div
      className=" w-full h-full  p-2 "
      style={{ backgroundColor: `${colorPrimary}` }}
    >
      {isError ? (
        <p>Error in loading</p>
      ) : isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="text-white flex gap-2 items-center">
            <Link to="/">
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
            </Link>
            <h1 className="text-xl font-bold tracking-wider capitalize">
              {pokeData.pokeName}
            </h1>
            <span className="ml-auto">{pokeData.pokeId}</span>
          </div>
          <div className="flex items-center justify-center mt-5 -mb-7">
            <img
              src={pokeData.imgSrc}
              alt={`image of ${pokeData.name}`}
              className="h-32 aspect-square"
            />
          </div>
          <div className="bg-white w-full  mb-2 ">
            <div className="flex gap-4  text-white justify-center items-center text-xs pt-9">
              {/* <span className="bg-[#74cb48] px-3 py-2 rounded-3xl">Grass</span>
              <span className="bg-[#A43E9E] px-3 py-2 rounded-3xl">Poison</span> */}
              {pokeData.types.map((ele) => {
                const pokeType = ele.type.name;
                const color = typesColors[pokeType];
                return (
                  <span
                    className=" px-3 py-2 rounded-3xl  capitalize"
                    style={{ backgroundColor: `${color}` }}
                  >
                    {pokeType}
                  </span>
                );
              })}
            </div>
            <div className="grid place-content-center mt-6">
              <h3 className="text-center">About</h3>
              <div className="flex justify-center divide-x-2 divide-gray-300 pb-6">
                <span className="p-4">
                  <div className="flex gap-1 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                      />
                    </svg>
                    <p className="text-sm">69 Kg</p>
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-500">
                    Weight
                  </p>
                </span>
                <span className="p-4">
                  <div className="flex gap-1 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>

                    <p className="text-sm">69 m</p>
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-500">
                    Height
                  </p>
                </span>
                <span className="p-4">
                  <div>
                    <p className="text-sm">Chlorophyll</p>
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-500">
                    Moves
                  </p>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokeDetail;
