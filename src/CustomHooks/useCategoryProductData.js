import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleProductData = () => {
  const [categoryName, setCategoryName] = useState(null);
  const { category } = useParams();

  const getCategoryName = async () => {
    const data = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const categoryName = await data.json();

    console.log(categoryName.products);
    setCategoryName(categoryName.products);
  };

  useEffect(() => {
    getCategoryName();
  }, [category]);

  return categoryName;
};

export default useSingleProductData;
