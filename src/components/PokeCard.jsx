import React from "react";
// import { useGetPokemonImgQuery } from "../services/PokeImgApi";
const PokeCard = ({ details }) => {
  const regex = /\/(\d+)\/$/;
  const match = regex.exec(details.url);
  let number = match && match[1];
  if (number <= 9) {
    number = `00${number}`;
  } else if (number > 9 && number < 99) {
    number = `0${number}`;
  }
  const pokeImgUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${number}.png`;
  return (
    <div className="shadow-md py-4 px-6 flex flex-col items-center">
      <p className="self-end translate-x-3 -translate-y-3">#{number}</p>
      <div className="w-16 aspect-square">
        <img
          src={pokeImgUrl}
          alt="image of pokemon"
          className="w-full h-full"
        />
      </div>
      <h2 className=" mt-2 text-[14px] font-semibold capitalize">
        {details.name}
      </h2>
    </div>
  );
};

export default PokeCard;
