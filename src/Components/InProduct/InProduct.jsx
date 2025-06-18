import React from "react";
import { NavLink } from "react-router-dom";
import all_product from "../Assets/all_product.js";

import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";

const InProduct = ({ id }) => {
  const product = all_product.filter((item) => item.id == id)[0];

  return (
    <div>
      <div>
        {/* Breadcrumb Navigation */}
        <div className="bg-white py-3 px-6 text-sm font-medium text-gray-600 flex items-center space-x-2">
          <NavLink to="/" className="hover:text-gray-900">
            SHOP
          </NavLink>
          <span className="text-gray-400">{">"}</span>
          <NavLink
            to={`/${product.category}s`}
            className="hover:text-gray-900 capitalize"
          >
            {product.category}
          </NavLink>
          <span className="text-gray-400">{">"}</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="flex mx-32 justify-center gap-14 my-12  ">
          <div className="flex flex-col gap-6 w-[15%] ">
            <img className="w-42 h-48" src={product.image} alt="" />
            <img className="w-42 h-48" src={product.image} alt="" />
            <img className="w-42 h-48" src={product.image} alt="" />
            <img className="w-42 h-48" src={product.image} alt="" />
          </div>
          <div className="w-[50%] h-82">
            <img className="w-full h-full" src={product.image} alt="" />
          </div>
          <div className="w-[35%]">
            <h1 className="text-stone-900 text-5xl font-semibold leading-tight">
              {product.name}
            </h1>
            <p className="flex justify-start py-6">
              <img className="w-5 h-5" src={star_icon} alt="" />
              <img className="w-5 h-5" src={star_icon} alt="" />
              <img className="w-5 h-5" src={star_icon} alt="" />
              <img className="w-5 h-5" src={star_icon} alt="" />
              <img className="w-5 h-5" src={star_dull_icon} alt="" />
              <p className="font-medium">(122)</p>
            </p>
            <div className="flex gap-10 text-2xl font-bold py-8">
              <p className="text-gray-400">
                <del>${product.old_price}</del>
              </p>
              <p className="text-red-500">${product.new_price}</p>
            </div>

            <p>
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </p>
            <p className="py-8 text-gray-500 font-semibold text-2xl">
              Select Size
            </p>
            <div className="flex gap-6 ">
              <div className="py-5 p-7 bg-stone-100 border-1 border-stone-300">
                S
              </div>
              <div className="py-5 p-7 bg-stone-100 border-1 border-stone-300">
                M
              </div>
              <div className="py-5 p-7 bg-stone-100 border-1 border-stone-300">
                L
              </div>
              <div className="py-5 p-7 bg-stone-100 border-1 border-stone-300">
                XL
              </div>
              <div className="py-5 p-7 bg-stone-100 border-1 border-stone-300">
                XXL
              </div>
            </div>
            <button className="my-10 bg-red-500 py-4 px-12 rounded-md text-white font-semibold backdrop-brightness-200">
              ADD TO CART
            </button>
            <div className="flex flex-col gap-3">
              <p>
                <strong>Category: </strong>
                {product.name}, T-shirt, Crop Top
              </p>
              <p>
                <strong>Tags: </strong>Modern,Latest
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="flex flex-col mx-32">
        <div className="flex gap-0 ">
          <div className="border-stone-300 border-2 border-r-0 border-b-0 font-semibold px-12 py-8 ">
            Description
          </div>
          <div className="border-stone-300 border-2 border-b-0 font-semibold  text-stone-700 bg-stone-50 px-12 py-8">
            Reviews(122)
          </div>
        </div>
        <div className="border-stone-300 border-2  px-14 py-14 ">
          <p>
            An e-commerce website is an online platform that facilitates buying
            and selling of products or services over the internet. it serves as
            a virtual marketplace where businesses and individuals showcase
            their products, interact with customers, and conduct transactions
            without the need for a physical presence. E-commerce websites have
            gained immense popularity due to their convenience accessibility,
            and the global reach they offer.
          </p>
          <p className="mt-6">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices and any available
            variations (e.g, sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InProduct;
