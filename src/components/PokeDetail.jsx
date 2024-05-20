import React from "react";
import { Link } from "react-router-dom";
import { typesColors } from "../utilities/typeMapping";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import GridLayout from "../layouts/GridLayout";
import StatContainer from "./StatContainer";
import { IoArrowBackOutline } from "react-icons/io5";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { TfiRuler } from "react-icons/tfi";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
const statsMap = {
  hp: "hp",
  attack: "atk",
  defense: "def",
  "special-attack": "satk",
  "special-defense": "sdef",
  speed: "spd",
};
const PokeDetail = () => {
  const pokeData = useLoaderData();
  const id = Number(useParams().id);
  const navigate = useNavigate();
  // console.log(pokeData);
  function handleClick(step) {
    if (step === "next") {
      navigate(`/pokemon/${id + 1}`);
    } else if (step === "back") navigate(`/pokemon/${id - 1}`);
  }
  const primaryColor = typesColors[pokeData.types[0].type.name][0];
  const primaryColorLight = typesColors[pokeData.types[0].type.name][1];
  return (
    <GridLayout style={{ backgroundColor: primaryColor }}>
      <div className="absolute  text-white w-full justify-between px-4 top-[18%] text-3xl">
        {id !== 1 && (
          <MdNavigateBefore
            className="absolute left-3"
            onClick={() => handleClick("back")}
          />
        )}
        {id !== 1000 && (
          <MdNavigateNext
            className="absolute right-3"
            onClick={() => handleClick("next")}
          />
        )}
      </div>
      <div className="w-32 aspect-square absolute left-1/2 -translate-x-1/2 top-[13%] object-cover">
        <img
          src={pokeData.imgSrc}
          alt={pokeData.pokeName}
          className="w-full h-full"
        />
      </div>
      <div className="text-white flex gap-2 px-3 pt-4">
        <Link to="/">
          <IoArrowBackOutline size={24} color="white" />
        </Link>
        <h1 className="text-xl font-bold tracking-wider capitalize">
          {pokeData.pokeName}
        </h1>
        <span className="ml-auto">{pokeData.pokeId}</span>
      </div>

      <div className="bg-white m-2 rounded px-2 py-4">
        <div className="flex gap-2 mt-12 justify-center">
          {pokeData.types.map((ele) => {
            const type = ele.type.name;
            const bgColor = typesColors[type];
            return (
              <span
                key={type}
                className="capitalize text-white text-sm px-[0.45rem] py-[0.25rem] rounded-full"
                style={{ backgroundColor: bgColor }}
              >
                {type}
              </span>
            );
          })}
        </div>
        <h1
          className="mt-2 text-center font-semibold text-lg"
          style={{ color: primaryColor }}
        >
          About
        </h1>
        <div className="mt-6 grid grid-cols-3 justify-center ">
          <div className="border-r border-solid border-neutral-200 px-2">
            <div className="flex gap-2 items-center justify-center">
              <LiaWeightHangingSolid />
              <span className="text-sm">{pokeData.weight} kg</span>
            </div>
            <p className="text-xs text-center mt-3 text-gray-400">Weight</p>
          </div>
          <div className="border-r border-solid border-neutral-200 px-2">
            <div className="flex gap-2 items-center justify-center">
              <TfiRuler />
              <span className="text-sm">{pokeData.height} m</span>
            </div>
            <p className="text-xs text-center mt-3 text-gray-400">Height</p>
          </div>
          <div className="  px-2">
            <div className="flex gap-2 items-center justify-center">
              <span className="text-sm capitalize">{pokeData.ability}</span>
            </div>
            <p className="text-xs text-center mt-3 text-gray-400">Ability</p>
          </div>
        </div>
        <h1
          className="mt-8 text-center font-semibold text-lg"
          style={{ color: primaryColor }}
        >
          Base Stats
        </h1>
        <div className="grid grid-cols-[1fr_4fr] px-3">
          <StatContainer
            primaryColor={primaryColor}
            primaryColorLight={primaryColorLight}
            baseStats={pokeData.stats}
          ></StatContainer>
        </div>
      </div>
    </GridLayout>
  );
};

export default PokeDetail;

export async function loader({ params }) {
  const { id } = params;
  try {
    const { data: pokeDetail } = await axios.get(
      ` https://pokeapi.co/api/v2/pokemon/${id}`
    );

    let number = pokeDetail.id;
    if (number <= 9) {
      number = `#00${number}`;
    } else if (number > 9 && number < 99) {
      number = `#0${number}`;
    } else {
      number = `#${number}`;
    }
    return {
      pokeId: number,
      pokeName: pokeDetail.name,
      types: pokeDetail.types,
      imgSrc:
        pokeDetail.sprites.other.dream_world.front_default ||
        pokeDetail.sprites.front_default,
      weight: pokeDetail.weight,
      height: pokeDetail.height,
      ability: pokeDetail.abilities[0].ability.name,
      stats: pokeDetail.stats.map((ele) => {
        const name = statsMap[ele.stat.name];
        const { base_stat } = ele;
        return [name, base_stat];
      }),
    };
  } catch (error) {}
}
