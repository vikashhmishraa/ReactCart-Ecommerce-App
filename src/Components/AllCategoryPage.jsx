import React, { useContext, useEffect, useState } from "react";
import categoryIcon from "/images/vegsvg.svg";
import { Link } from "react-router-dom";
import CategorySkelatonLarge from "./Skeletons/CategorySkelatonLarge";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import useCategoryData from "../CustomHooks/useCategoryData.js";

const AllCategoryPage = () => {
  let category = useCategoryData();
  const { theme } = useContext(ThemeStore);
  let lightTheme = "min-h-10 bg-white flex flex-col items-center py-10";
  let darkTheme = "min-h-10 bg-base-700 flex flex-col items-center py-10";

  console.log("Category state:", category);
  return (
    <div>
      <div className="flex items-center justify-center text-lime-700 text-3xl font-bold">
        <h1>All Categories</h1>
      </div>
      <div className="flex flex-wrap">
        {category == null ? (
          <CategorySkelatonLarge />
        ) : (
          category.map((categoryName, idx) => (
            <Link key={idx} to={`/category/${categoryName}`}>
              <div
                key={idx}
                className="relative w-[250px] h-32 flex flex-row bg-white-500 rounded-md shadow-lg border-solid border-[1px] border-lime-500 m-4 cursor-pointer"
              >
                <div className="p-2">
                  <h2
                    className={
                      theme == "light"
                        ? "text-2xl text-black"
                        : "text-2xl text-white"
                    }
                  >
                    {categoryName}
                  </h2>
                  {/* <p>Local Market</p> */}
                </div>
                <img
                  src={categoryIcon}
                  className="absolute h-20 mt-[30px] ml-[150px]"
                  alt={categoryName}
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllCategoryPage;
