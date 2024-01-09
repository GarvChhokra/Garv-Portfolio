import React from "react";
import { NavbarData } from "../Header/Navbar";
import Link from "next/link";

interface ProjectProps {
  navbarData: NavbarData[];
}
const FooterNav: React.FC<ProjectProps> = ({ navbarData }) => {
  return (
    <>
      <div className="p-10">
        <ul className="md:flex text-center justify-center">
          {navbarData.map((itm, index) => {
            return (
              <Link className="mx-4" href={`#${itm.title}`} key={index}>
                <li className="cursor-pointer text-xl">{itm.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterNav;
