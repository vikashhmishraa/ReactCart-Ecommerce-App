import React, { useContext } from "react";
import Category from "./Category.jsx";
import Card from "./Card.jsx";
// import productData from "../Data.js";
// import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import SkeletionUI from "./Skeletons/SkeletionUI.jsx";
import HomeBanner from "./HomeBanner.jsx";
// import { Link } from "react-router-dom";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import useProductData from "../CustomHooks/useProductData.js";

const Home = () => {
  const { theme } = useContext(ThemeStore);

  const {
    allProducts,
    products,
    // setProducts,
    handleTopRated,
    handleCategory,
    handleViewAll,
    handleSearch,
  } = useProductData();
  // const [allProducts, setAllProducts] = useState(null);
  // const [products, setProducts] = useState(null);

  // const getData = async () => {
  //   let productData = await fetch("https://dummyjson.com/products");

  //   console.log(productData);
  //   let finalData = await productData.json();
  //   console.log(finalData.products);
  //   setAllProducts(finalData.products);
  //   setProducts(finalData.products);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  let lightTheme =
    "flex text-black text-3xl text-start mt-12 mb-8 mx-4  justify-between";
  let darkTheme =
    "flex text-lime-700 text-3xl text-start mt-12 mb-8 mx-4  justify-between";

  return (
    <>
      <HomeBanner />
      <div className="flex flex-row justify-between">
        <Category />
      </div>
      <div className={theme == "light" ? lightTheme : darkTheme}>
        <h1 className="">You Might Need</h1>
        <div className="flex ">
          <div className="mr-4">
            <SearchBar handleSearch={handleSearch} />
          </div>
          <button
            className="btn bg-lime-500 text-black hover:bg-lime-700 mr-4"
            onClick={handleTopRated}
          >
            Top Rated
          </button>
          <button
            className="btn bg-lime-500 text-black hover:bg-lime-700 mr-4"
            onClick={() => {
              handleCategory("furniture");
            }}
          >
            Furnitures
          </button>
          <button
            className="btn bg-lime-500 text-black hover:bg-lime-700 mr-4"
            onClick={() => {
              handleCategory("groceries");
            }}
          >
            Grocery
          </button>
          <button
            className="btn bg-lime-500 text-black hover:bg-lime-700 mr-4"
            onClick={() => {
              handleCategory("beauty");
            }}
          >
            Beauty
          </button>
          <button
            className="btn bg-lime-500 text-black hover:bg-lime-700 mr-4"
            onClick={() => {
              handleViewAll();
            }}
          >
            View All
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        {allProducts == null ? (
          <SkeletionUI />
        ) : (
          products.map((obj, idx) => {
            return (
              // <Link key={obj.id} to={`/product/${obj.id}`}>
              <Card key={idx} productData={obj} />
              //  </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
