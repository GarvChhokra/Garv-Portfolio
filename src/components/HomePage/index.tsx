import React from "react";
import Info from "./info";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Garv Chhokra - Portfolio</title>
        <meta
          name="description"
          content="Garv Chhokra's Portfolio showcasing experience, projects, and skills."
        />
        <meta
          name="keywords"
          content="Garv Chhokra, Portfolio, Software Engineering, Artificial Intelligence, React, Next.js"
        />
        <meta name="author" content="Garv Chhokra" />
      </Head>
      <div className="xl:flex justify-center text-center xl:items-center md:items-center p-10 mx-4 sm:mx-10 lg:mx-20">
        <div className="relative">
          <div className="absolute xl:top-16 lg:top-16 sm:top-18 w-full z-0">
            <svg
              className="xl:w-80 lg:w-80 md:w-80 sm:w-80 animate-blob"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#B2BEB5"
                d="M55.4,-52.1C67,-43.7,68.5,-21.8,65.4,-3.1C62.3,15.6,54.6,31.3,43,43.8C31.3,56.3,15.6,65.7,2.8,62.8C-10,60,-20,45,-33.9,32.5C-47.9,20,-65.8,10,-69.3,-3.5C-72.9,-17.1,-62,-34.1,-48.1,-42.5C-34.1,-50.8,-17.1,-50.5,2.4,-52.9C21.8,-55.3,43.7,-60.4,55.4,-52.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <img
            src="garv_profile.png"
            alt="Garv Chhokra - Software Engineer"
            className="rounded-full z-10 relative mb-10"
          />
        </div>
        <div className="xl:flex flex-col sm:text-center sm:py-10 pl-4 sm:pl-10">
          <Info />
        </div>
      </div>
    </>
  );
};

export default HomePage;
