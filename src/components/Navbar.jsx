import React from "react";
import logo from "../assets/BreakoutAI.png";

const Navbar = () => {
  return (
    <div className="flex justify-between m-4 mb-0 items-center p-4 pl-8 pr-8">
      <div className="logo flex items-center ">
        <img src={logo} alt="" className="h-10 w-10" />
        <p className="text-xl font-semibold"> BreakoutAI</p>
      </div>
      <div className="menu">
        <ul className="flex gap-12 pr-8 pl-8 text-md font-medium">
          <li>Benifits</li>
          <li>Process</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Whatapp</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
