import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ image, name, new_price, old_price, id }) => {
  return (
    <NavLink to={`/product/${id}`}>
      <div className="flex flex-col w-72 mt-12 transition-transform duration-300 hover:scale-105">
        <img className="w-full h-[75%]" src={image} alt={name} />
        <p className="h-[15%] mt-3">{name}</p>
        <div className="h-[10%] flex justify-start">
          <p className="m-2 mt-1 ml-0">${new_price}</p>
          <p className="m-2 mt-1 text-slate-600">
            <del>${old_price}</del>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
