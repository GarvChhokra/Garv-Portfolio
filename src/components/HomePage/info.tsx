"use client"
import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
import { LuBadgeCheck } from "react-icons/lu";

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
    color: ${(props) => (props.$primary ? "white" : "blacks")};
  }
`;

const Info = () => {
  return (
    <div className="text-center xl:p-4 xl:w-3/4 mb-5">
      <p className="text-gray-500">Hello, I'm</p>
      <h2 className="text-4xl font-bold tracking-wider md:flex md:justify-center"><LuBadgeCheck />Garv Chhokra</h2>
      <p className="text-gray-500 text-lg mt-4">
        AI/ML Developer | Data Scientist | Data Engineer | Data Analyst |
        Software Developer | Full Stack Developer
      </p>
      <p className="text-gray-700 text-xl mt-8 xl:mt-16 md:p-5 justify-center sm:text-center">
        Currently working as an <strong>I&IT Technology Analyst/Developer</strong>
      </p>
      <p className="text-gray-400 text-md">Based in Canada. </p>
      <div className="flex justify-center xl:justify-between text-4xl mt-8 xl:mt-10 mb-10">
        <Link href="https://www.linkedin.com/in/garvchhokra/" target="blank">
          <AiFillLinkedin />
        </Link>
        <Link href="https://github.com/GarvChhokra" target="blank">
          <AiFillGithub />
        </Link>
      </div>
      <Button $primary>Resume</Button>
      <Link href="#Contact">
        <Button>Contact Me</Button>
      </Link>
    </div>
  );
};

export default Info;
