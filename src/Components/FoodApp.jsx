import React, { useContext } from "react";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
const FoodApp = () => {
  const { theme } = useContext(ThemeStore);

  let lightTheme =
    "min-h-[75vh] flex flex-col items-center justify-center bg-white";
  let darkTheme =
    "min-h-[75vh] flex flex-col items-center justify-center bg-base-700";

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="text-center flex flex-col items-center justify-center m-[50px] ">
        <h1 className="text-5xl font-bold text-lime-500 mb-4">
          Food Order App
        </h1>
        <p className="text-2xl text-gray-700 mb-6 mt-8">Coming Soon</p>
        <div className="relative m-16">
          <div className=" w-24 h-24 rounded-full bg-lime-500 animate-ping"></div>
          <div className="   absolute  top-0 left-0 w-24 h-24 rounded-full bg-lime-500 opacity-75"></div>
        </div>
        <p
          className={
            theme == "light" ? "text-gray-600 mt-8" : "text-white mt-8"
          }
        >
          We're working hard to bring you the best food ordering experience.
        </p>
        <p className={theme == "light" ? "text-gray-600" : "text-white"}>
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default FoodApp;
