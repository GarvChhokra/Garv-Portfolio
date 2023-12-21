"use client"
import React, { useState } from "react";
import { NavbarData } from "./Navbar";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

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
        <Link href="#">
          <h1 className="text-4xl font-medium cursor-pointer">Garv Chhokra</h1>
        </Link>
      </div>
      <div className="sm:flex hidden items-center space-x-8">
        {navbarData.map((item, index) => (
          <Link href={`#${item.title}`} key={index}>
            {/* Remove the <a> tag here */}
            <span className="text-xl">{item.title}</span>
          </Link>
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
            <Link key={index} href={`#${item.title}`}>
              {/* Remove the <a> tag here */}
              <span className="text-xl">{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
