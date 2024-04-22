import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const PokeDetail = () => {
  const data = useParams();
  console.log(data);
  const { id } = data;
  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch("");
    }
  });
  return (
    <div className="w-full height-full bg-[#74cb48] py-4 px-6">
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
        <h1 className="text-xl font-bold tracking-wider">Bulbasaur</h1>
        <span className="ml-auto">#001</span>
      </div>
      <div className="bg-white"></div>
    </div>
  );
};

export default PokeDetail;
