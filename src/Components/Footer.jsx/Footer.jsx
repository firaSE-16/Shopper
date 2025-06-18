import React from "react";
import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-auto text-[20px] text-slate-800 pb-8 pt-8">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className="sm:w-10 sm:h-10 lg:w-16 lg:h-16 object-contain"
        />
        <p className="text-black text-xl font-semibold lg:text-3xl">SHOPPER</p>
      </div>
      <ul className="flex justify-between gap-10">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="flex justify-center gap-3">
        <li className="border-[1px] bg-slate-50 border-slate-200 p-3 w-14 h-14">
          <img src={instagram_icon} alt="Instagram" />
        </li>
        <li className="border-[1px] bg-slate-50 border-slate-200 p-3 w-14 h-14">
          <img src={pintester_icon} alt="Pinterest" />
        </li>
        <li className="border-[1px] bg-slate-50 border-slate-200 p-3 w-14 h-14">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </li>
      </ul>

      {/* Horizontal Line */}
      <hr className="h-[3px] bg-slate-300 w-[80%] rounded-full border-0 mx-auto" />

      {/* Copyright Text */}
      <p className="mt-4 text-center text-slate-600">
        Copyright © 2023 - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
