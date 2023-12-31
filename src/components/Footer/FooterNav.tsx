import React from "react";
import { NavbarData } from "../Header/Navbar";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

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
              <ScrollLink
                to={itm.title}
                smooth={true}
                duration={500}
                key={index}
                className="mx-4 cursor-pointer text-xl"
              >
                {itm.title}
              </ScrollLink>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterNav;
