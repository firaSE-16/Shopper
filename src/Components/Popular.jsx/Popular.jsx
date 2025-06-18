import React from 'react';
import data_product from '../Assets/data';
import Item from '../item.jsx/Item';

const Popular = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl text-center">POPULAR IN WOMEN</h1>
        <hr className="border-slate-950 border-2 w-32 sm:w-[30%] md:w-[24%] lg:w-[12%] mt-5" />
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-7 mt-5 w-[100%] justify-center ">
        {data_product.map((data, index) => {
          return (
            <Item
              key={index}
              image={data.image}
              new_price={data.new_price}
              old_price={data.old_price}
              name={data.name}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
