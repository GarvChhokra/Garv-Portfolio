import React from "react";
import Navbar from "../Header/Navbar";
import FooterNav from "./FooterNav";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="p-20 text-center">
      <FooterNav navbarData={Navbar} />
      <p className="text-gray-700">
        Copyright © {year} Garv Chhokra. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
