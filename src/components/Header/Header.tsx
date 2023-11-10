import React from "react";
import { NavbarData } from "./Navbar";
import Link from "next/link";

interface HomeProps {
  navbarData: NavbarData[];
}
const Header: React.FC<HomeProps> = ({ navbarData }) => {
  return (
    <div className="flex justify-between items-center p-12 mx-auto my-auto w-3/4">
      <div>
        <Link href="#">
          <h1 className="text-4xl font-medium">Garv Chhokra</h1>
        </Link>
      </div>
      <div>
        <ul className="hidden sm:flex space-x-8">
          {navbarData.map((itm, index) => {
            return (
              <Link href={`#${itm.title}`} key={index}>
                <li className="cursor-pointer text-xl">{itm.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
