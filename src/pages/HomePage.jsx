import React, { useContext, useState } from "react";
import GridLayout from "../layouts/GridLayout";
import Header from "../components/Header";
import PokeList from "../components/PokeList";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { SearchContext } from "../context/context";

const PAGE_SIZE = 4;
const HomePage = () => {
  const [currPage, setCurrPage] = useState(1);
  const { searchInput } = useContext(SearchContext);

  const pokeList = useLoaderData();
  const filteredList = pokeList.filter((pokemon) =>
    pokemon.name.includes(searchInput.toLowerCase())
  );

  const firstPage = 1;
  const lastPage = Math.ceil(filteredList.length / PAGE_SIZE);
  const start = (currPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const finalst = filteredList.slice(start, end);

  return (
    <GridLayout style={{ backgroundColor: "#DC0A2D" }}>
      <Header></Header>
      <PokeList
        pokeList={finalst}
        isFirstPage={currPage <= firstPage}
        isLastPage={currPage >= lastPage}
        setCurrPage={setCurrPage}
      ></PokeList>
    </GridLayout>
  );
};

export default HomePage;

export async function loader() {
  if (localStorage.getItem("pokemons")) {
    return JSON.parse(localStorage.getItem("pokemons"));
  }
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000"
    );
    const { results } = data;

    let finalst = [];
    for (let i = 0; i < results.length; i++) {
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        i + 1
      }.png`;
      finalst.push({ id: i + 1, name: results[i].name, imgSrc: url });
    }

    localStorage.setItem("pokemons", JSON.stringify(finalst));
    return finalst;
  } catch (error) {
    //....
  }
}
