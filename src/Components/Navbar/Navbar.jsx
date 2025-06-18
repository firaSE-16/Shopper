import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

      const [ menu, setMenu] = useState("Shop")

  return (
    <div className="w-full lg:h-32 sm:h-24 flex items-center justify-around px-6 py-4 border-b-2 border-gray-300">
      <div className="flex items-center space-x-2 ">
        <img
          src={logo}
          alt="logo"
          className="sm:w-10 sm:h-10 lg:w-16 lg:h-16 object-contain"
        />
        <p className="text-black text-xl font-semibold lg:text-3xl">SHOPPER</p>
      </div>

      <ul className="flex space-x-6 font-medium text-slate-600 ">
        <li className="hover:text-gray-600 cursor-pointer flex flex-col justify-center items-center lg:w-16 ">
          <button onClick={() => setMenu("Shop")}>
            <NavLink to="/">Shop</NavLink>
          </button>
          {menu === "Shop" && (
            <hr className="border-none w-[80%] h-[3px] bg-red-500 m-2" />
          )}
        </li>
        <li className="hover:text-gray-600 cursor-pointer flex flex-col justify-center items-center  lg:w-16">
          <button onClick={() => setMenu("Men")}>
            <NavLink to="/mens">Men</NavLink>
          </button>
          {menu === "Men" && (
            <hr className="border-none w-[80%] h-[3px] bg-red-500 m-2" />
          )}
        </li>
        <li className="hover:text-gray-600 cursor-pointer flex flex-col justify-center items-center lg:w-16">
          <button onClick={() => setMenu("Women")}>
            <NavLink to="/womens">Women</NavLink>
          </button>
          {menu === "Women" && (
            <hr className="border-none w-[80%] h-[3px] bg-red-500 m-2" />
          )}
        </li>
        <li className="hover:text-gray-600 cursor-pointer flex flex-col justify-center items-center lg:w-16">
          <button onClick={() => setMenu("Kids")}>
            <NavLink to="/kids">Kids</NavLink>
          </button>
          {menu === "Kids" && (
            <hr className="border-none w-[80%] h-[3px] bg-red-500 m-2" />
          )}
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="lg:w-32 lg:h-12 sm:w-24  bg-white text-black border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
          <NavLink to="/login">Login</NavLink>
        </button>
        <div className="relative flex items-center justify-center sm:w-7 sm:h-7 lg:w-9 lg:w-9">
          <NavLink to='/cart'>
            <img
              src={cart_icon}
              alt="cart_icon"
              className="w-full h-full object-contain"
            />
            <div className="bg-red-600 rounded-full text-center flex items-center justify-center sm:w-5 lg:w-6 sm:h-5 lg:h6 text-white p-1 absolute bottom-4 left-4">
              0
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar