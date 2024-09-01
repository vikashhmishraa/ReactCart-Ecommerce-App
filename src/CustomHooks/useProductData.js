import React, { useEffect, useState } from "react";

const useProductData = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [products, setProducts] = useState(null);

  const getData = async () => {
    let productData = await fetch("https://dummyjson.com/products");

    console.log(productData);
    let finalData = await productData.json();
    console.log(finalData.products);
    setAllProducts(finalData.products);
    setProducts(finalData.products);
  };
  useEffect(() => {
    getData();
  }, []);

  let handleTopRated = () => {
    let filteredData = products.filter((obj) => {
      return obj.rating > 4;
    });
    setProducts(filteredData);
  };

  let handleCategory = (category) => {
    let filteredData = allProducts.filter((obj) => {
      return obj.category == category;
    });
    setProducts(filteredData);
  };

  let handleViewAll = () => {
    let filteredData = allProducts.filter((obj) => {
      // return obj;
      return obj;
    });
    setProducts(filteredData);
  };

  const handleSearch = (query) => {
    let filteredData = allProducts.filter((obj) => {
      return obj.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase().trim());
    });
    console.log("first");
    setProducts(filteredData);
  };

  return {
    allProducts,
    products,
    setAllProducts,
    setProducts,
    // handleFilter,
    handleTopRated,
    handleCategory,
    handleViewAll,
    handleSearch,
  };
};

export default useProductData;
