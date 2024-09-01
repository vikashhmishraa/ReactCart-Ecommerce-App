import React, { useEffect, useState } from "react";

const useFetchReviews = () => {
  const [data, setData] = useState(null);
  const getReviews = async () => {
    const data = await fetch("https://dummyjson.com/products/categories");
    const reviews = await data.json();

    let finalData = await reviews.json();
    console.log(finalData);
    setData(finalData);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return data;
};

export default useFetchReviews;
