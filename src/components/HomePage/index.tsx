import React from "react";
import Info from "./info";

const HomePage = () => {
  return (
    <div className="xl:flex justify-center text-center xl:items-center p-10 mx-20">
      <div className="relative">
        <div className="absolute xl:top-16 lg:top-16 w-full z-0">
          <svg
            className="xl:w-80 lg:w-80 md:w-80 animate-blob"
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
          className="rounded-full z-10 relative"
          src="garv_profile.png"
          alt="Profile"
        />
      </div>
      <div className="xl:flex sm:text-center sm:py-10 pl-10">
        <Info />
      </div>
    </div>
  );
};

export default HomePage;
