import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

const Button = styled.button<{ $primary?: boolean }>`
  color: ${(props) => (props.$primary ? "black" : "white")};
  font-size: 1.2em;
  background-color: ${(props) =>
    props.$primary ? "white" : "rgba(26, 25, 25, 0.88);"};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 10px;
  transition: background-color 0.5s;

  &:hover {
    background-color: black;
    color: ${(props) => (props.$primary ? "white" : "black")};
  }
}`;

const Contact = () => {
  return (
    <div className="text-center xl:p-4 xl:w-3/4 mb-5">
      <h2 className="text-4xl font-bold tracking-wider flex justify-center"><LuBadgeCheck />Contact</h2>
      <p className="text-gray-700 text-xl mt-8 xl:mt-16 p-5 sm:justify-center sm:text-center">
        Feel free to reach out to me for any queries or collaborations.
      </p>
      <div className="flex justify-center xl:justify-between text-4xl mt-8 xl:mt-10 mb-10">
        <Link href="https://www.linkedin.com/in/garvchhokra/" target="blank">
          <AiFillLinkedin />
        </Link>
        <Link href="https://github.com/GarvChhokra" target="blank">
          <AiFillGithub />
        </Link>
      </div>
      <ScrollLink to="Contact" smooth={true} duration={500}>
        <Button $primary>Contact Me</Button>
      </ScrollLink>
    </div>
  );
};

export default Contact;
