// import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Card from "./Card";
import SkeletionUI from "./Skeletons/SkeletionUI";
import useSingleProductData from "../CustomHooks/useCategoryProductData";
// import useCategoryData from "../CustomHooks/useCategoryData";

const CatagoryProducts = () => {
  const categoryName = useSingleProductData();
  // const categoryName = useCategoryData();

  // console.log("categoryName", categoryName[0].category); //sunglasses

  // Check if categoryName is loaded and has data
  if (!categoryName || !Array.isArray(categoryName)) {
    return <SkeletionUI />;
  }

  return (
    <>
      <h1 className="flex items-center justify-center text-lime-500 text-3xl font-bold">
        All {categoryName.length > 0 ? categoryName[0].category : "Products"}
      </h1>
      <div className="products-container flex flex-wrap">
        {categoryName.length > 0 ? (
          categoryName.map((obj, idx) => (
            // <Link key={obj.id} to={`/product/${obj.id}`}>
              <Card  key={idx} productData={obj} />
            // </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
};

export default CatagoryProducts;
