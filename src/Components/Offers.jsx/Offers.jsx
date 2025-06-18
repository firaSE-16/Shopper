import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="flex mx-32 mt-16 bg-gradient-to-b from-purple-200 to-white justify-around items-center p-4 ">
      <div>
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-medium leading-tight flex flex-col gap-6">
          <p>Exclusive</p>
          <p>Offers For</p>
          <p>You</p>
        </h1>
        <p className="mt-6 font-semibold text-2xl">
          Only On Best Seller Product
        </p>
        <button className="w-64 mt-16 px-8 py-5 bg-red-500 text-white flex rounded-full items-center justify-center text-2xl">
          Check Now
        </button>
      </div>
      <img src={exclusive_image} alt="" />
    </div>
  );
}

export default Offers