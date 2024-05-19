import React, { useContext } from "react";
import Logo from "../assets/logo.svg";
import { SearchContext } from "../context/context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { searchInput, updateSearchInput } = useContext(SearchContext);
  function handleClick() {
    updateSearchInput("");
  }
  return (
    <header>
      <div
        onClick={handleClick}
        className="text-white py-6 px-4 flex gap-4 items-center"
      >
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
          className=" bg-transparent outline-none w-full"
          value={searchInput}
          onChange={(e) => {
            updateSearchInput(e.target.value);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
