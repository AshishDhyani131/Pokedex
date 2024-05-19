import React from "react";
import { Link } from "react-router-dom";
const PokeCard = ({ details }) => {
  let number = details.id;
  if (number <= 9) {
    number = `00${number}`;
  } else if (number > 9 && number < 99) {
    number = `0${number}`;
  }
  return (
    <Link
      to={`/${details.id}`}
      className="shadow-md py-2 px-2 grid grid-rows-[1fr_2fr_1fr] place-content-center  "
    >
      <p className="justify-self-end translate-x-3 -translate-y-3">#{number}</p>
      <div className="w-12 aspect-square justify-self-center scale-[1.4]">
        <img
          src={details.imgSrc}
          alt="image of pokemon"
          className="w-full aspect-square"
        />
      </div>
      <h2 className=" mt-2 text-[14px] font-semibold capitalize">
        {details.name}
      </h2>
    </Link>
  );
};

export default PokeCard;
