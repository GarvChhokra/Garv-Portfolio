"use client"
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { NavbarData } from "./Navbar";

interface HomeProps {
  navbarData: NavbarData[];
}

const Header: React.FC<HomeProps> = ({ navbarData }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-6 sm:p-12 mx-auto w-full">
      <div>
        <ScrollLink to="top" smooth={true} duration={500}>
          <h1 className="text-4xl font-medium cursor-pointer">Garv Chhokra</h1>
        </ScrollLink>
      </div>
      <div className="sm:flex hidden items-center space-x-8">
        {navbarData.map((item, index) => (
          <ScrollLink
            to={item.title}
            smooth={true}
            duration={500}
            key={index}
          >
            <span className="text-xl hover:text-gray-600 hover:underline cursor-pointer">{item.title}</span>
          </ScrollLink>
        ))}
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 bg-white p-4 mt-4">
          {navbarData.map((item, index) => (
            <ScrollLink
              to={item.title}
              smooth={true}
              duration={500}
              key={index}
            >
              <span className="text-xl">{item.title}</span>
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
