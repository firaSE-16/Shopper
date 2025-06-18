import React from "react";
import all_product from "../Components/Assets/all_product.js";
import Item from "../Components/item.jsx/Item";
import banner_mens from "../Components/Assets/banner_mens.png";
import banner_women from "../Components/Assets/banner_women.png";
import banner_kids from "../Components/Assets/banner_kids.png";

const bannerImage = {
  men: banner_mens,
  women: banner_women,
  kid: banner_kids,
};

const SchopCategory = ({ category }) => {
  return (
    <div className="flex flex-col justify-center w-[100%]">
      <img className="mx-28 my-16" src={bannerImage[category]} alt="" />
      <div className="flex justify-between mx-40 items-center">
        <p className="text-[125%]">
          <b>Showing 1-12</b>out of 36 products
        </p>
        <div className="w-40">
          <select
            className="w-full border border-slate-400 text-gray-700 rounded-full px-3  py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            name=""
            id=""
          >
            <option value="">Category</option>
            <option value="">Price</option>
            <option value="">Rating</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 mt-5 w-[100%] justify-center ">
        {all_product.map((Product, index) => {
          if (Product.category === category) {
            return (
              <Item
                key={index}
                image={Product.image}
                new_price={Product.new_price}
                old_price={Product.old_price}
                name={Product.name}
                id={Product.id}
              />
            );
          }
        })}
      </div>
      <button className=" my-16 bg-gray-200 text-gray-600 text-[115%] w-52 h-16 rounded-full m-auto ">Explorer More </button>
    </div>
  );
};

export default SchopCategory;
