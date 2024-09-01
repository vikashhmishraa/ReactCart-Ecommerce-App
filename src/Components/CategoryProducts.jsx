// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import SkeletionUI from "./Skeletons/SkeletionUI";
import useSingleProductData from "../CustomHooks/useCategoryProductData";
// import useCategoryData from "../CustomHooks/useCategoryData";

const CatagoryProducts = () => {
  const categoryName = useSingleProductData();
  // const categoryName = useCategoryData();

  return (
    <>
      <div className="products-container flex flex-wrap">
        {categoryName == null ? (
          <SkeletionUI />
        ) : (
          categoryName.map((obj) => (
            <Link key={obj.id} to={`/product/${obj.id}`}>
              <Card key={obj.id} productData={obj} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default CatagoryProducts;
