import React from "react";
import VegImg from "/images/veg.jpg";

const HomeBanner = () => {
  return (
    <>
      <div className="relative w-[98%] h-96 mx-4 my-4 rounded-md bg-lime-500 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-screen h-full object-cover"
          src={VegImg}
          alt="ReactCart"
        />
      </div>
    </>
  );
};

export default HomeBanner;
