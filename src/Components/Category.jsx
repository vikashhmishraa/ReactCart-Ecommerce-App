import React, { useEffect, useState, useContext } from "react";
import categoryIcon from "/images/vegsvg.svg";
import { Link, useNavigate } from "react-router-dom";
import CategorySkelatonSmall from "./Skeletons/CategorySkeletonSmall";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import useCategoryData from "../CustomHooks/useCategoryData.js";

const Category = () => {
  // const [catagory, setCatagory] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const { theme } = useContext(ThemeStore);
  // const getCatagory = async () => {
  //   const data = await fetch("https://dummyjson.com/products/category-list");
  //   const catagoryName = await data.json();

  //   console.log(catagoryName);
  //   setCatagory(catagoryName);
  // };

  const catagory = useCategoryData();

  let lightTheme =
    "relative w-[234px] h-32 flex flex-row bg-white-500 rounded-md shadow-lg border-solid border-[1px] border-lime-500 m-4 cursor-pointer";
  let darkTheme =
    "relative w-[234px] h-32 flex flex-row bg-white-500 rounded-md shadow-lg border-solid border-[1px] border-lime-500 m-4 cursor-pointer text-white";

  return (
    <>
      <div className="flex flex-wrap justify-start">
        {catagory == null ? (
          <CategorySkelatonSmall />
        ) : (
          catagory.slice(0, 6).map((catagoryName, idx) => {
            return (
              <>
                <Link key={idx} to={`/category/${catagoryName}`}>
                  <div className={theme == "light" ? lightTheme : darkTheme}>
                    <div className="p-2">
                      <h2 className="text-2xl truncate">{catagoryName}</h2>
                      {/* <p>0 Products</p> */}
                    </div>
                    <img
                      src={categoryIcon}
                      className="absolute h-20 mt-[30px] ml-[150px]"
                      alt={catagoryName}
                    />
                  </div>
                </Link>
              </>
            );
          })
        )}

        {/* <div className="flex-col items-center  justify-center w-[100px] h-32 flex text-black bg-white-500 rounded-l-lg bg-[#BAEA70] m-4">
        <div className="p-5 bg-white rounded-full m-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={25}
            fill="currentColor"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </div>
        <p className="cursor-pointer">See All</p>
      </div> */}
        <div
          className="flex flex-col items-center justify-center w-[100px] h-32 text-black bg-white-500 rounded-lg bg-[#BAEA70] m-4 cursor-pointer"
          onClick={() => navigate("/all-categories")}
        >
          <div className="p-5 bg-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={25}
              fill="currentColor"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </div>
          <p className="cursor-pointer text-center">See All</p>
        </div>
      </div>
    </>
  );
};

export default Category;
