import PokeCard from "./PokeCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PokeList = ({ pokeList, isFirstPage, isLastPage, setCurrPage }) => {
  return (
    <main className=" bg-white m-2 rounded py-3 px-2">
      <div className=" grid grid-cols-2 gap-2">
        {pokeList.map((pokemon) => (
          <PokeCard details={pokemon} key={pokemon.id}></PokeCard>
        ))}
      </div>
      <div className="flex justify-around mt-8">
        {isFirstPage ? null : (
          <div
            className=" p-2 rounded-full hover:bg-neutral-200 duration-300"
            onClick={() => setCurrPage((prev) => prev - 1)}
          >
            <IoIosArrowBack size={24} />
          </div>
        )}
        {isLastPage ? null : (
          <div
            className="p-2 rounded-full hover:bg-neutral-200 duration-300"
            onClick={() => setCurrPage((prev) => prev + 1)}
          >
            <IoIosArrowForward size={24} />
          </div>
        )}
      </div>
    </main>
  );
};

export default PokeList;
