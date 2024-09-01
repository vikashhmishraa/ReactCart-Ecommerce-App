import React, { useEffect, useState } from "react";

const useCategoryData = () => {
  const [data, setData] = useState(null);
  const getCategory = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const categories = await response.json();

    const categoryNames = categories.map((category) => category.name);
    console.log(categoryNames);
    setData(categoryNames);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return data;
};

export default useCategoryData;
