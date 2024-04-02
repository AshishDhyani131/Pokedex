import React from "react";
import Logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { pokeSearch } from "../redux/reducers/searchPokemonSlice";

const Header = () => {
  const dispatch = useDispatch();
  function handleInputChange(e) {
    console.log(e.target.value);
    dispatch(pokeSearch(e.target.value));
  }
  return (
    <header>
      <div className="text-white py-6 px-4 flex gap-4 items-center">
        <img src={Logo} alt="image of pokeball" />
        <h1 className="text-4xl font-bold">Pok&#233;dex</h1>
      </div>
      <div className="  flex gap-1 bg-white ml-4 items-center border border-solid border-[#ccc] mr-4 py-1 px-2 rounded-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          className="w-6 h-6 stroke-[#DC0A2D]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          name="pokeSearch"
          className="w-[400px] bg-transparent outline-none w-full"
          onChange={handleInputChange}
        />
      </div>
    </header>
  );
};

export default Header;
