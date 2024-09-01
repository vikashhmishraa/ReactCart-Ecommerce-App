import { useEffect, useState } from "react";

const useFetchSingleProduct = (id) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const productData = await response.json();
      console.log(productData);
      setData(productData);
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]); // Add `id` as a dependency in case it changes

  return data;
};

export default useFetchSingleProduct;
