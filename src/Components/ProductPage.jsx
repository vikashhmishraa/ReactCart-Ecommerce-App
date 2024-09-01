import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import ReviewComment from "../Components/ReviewComment.jsx";
import { addCart } from "../Store/CartSlice.js";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const { id } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { thumbnail, title, rating, brand, price, reviews } = data;
  const { theme } = useContext(ThemeStore);
  const getData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let procuctData = await data.json();
    console.log(procuctData);
    setData(procuctData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set to true once the image loads
  };

  const handleAddToCart = () => {
    dispatch(addCart(data));
  };

  let lightTheme = "card lg:card-side bg-base-100 shadow-xl border-2";
  let darkTheme =
    "card lg:card-side bg-base-400 shadow-xl border-2 border-lime-500 text-white";

  console.log("Product data:", data);
  console.log("Reviews:", reviews);
  return (
    <>
      <div className="w-[60vw] justify-center items-center m-auto h-screen mt-16 ">
        <div className={theme == "light" ? lightTheme : darkTheme}>
          <figure className="relative">
            {!isImageLoaded && (
              <div className="skeleton w-full h-full absolute top-0 left-0 bg-gray-300"></div>
            )}

            <img
              onLoad={handleImageLoad}
              src={thumbnail}
              alt={title}
              className={isImageLoaded ? "opacity-100" : "opacity-0"}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Rating : {rating}</p>
            <p>Brand : {brand}</p>
            <h1>Price : ₹ {price}</h1>
            <div className="card-actions justify-end">
              <button className="btn bg-lime-500" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2  mt-6 rounded-xl shadow-2xl shadow-black p-4 mb-4">
          <h1 className="flex items-center justify-center text-lime-500 text-3xl mb-4 ">
            All Reviews
          </h1>
          {console.log("reviews ", reviews)}
          {/* {reviews.map((obj, idx) => (
            <ReviewComment key={idx} review={obj} />
          ))} */}
          {reviews && Array.isArray(reviews) && reviews.length > 0 ? (
            reviews.map((obj, idx) => <ReviewComment key={idx} review={obj} />)
          ) : (
            <p>No reviews available</p> // Fallback content if there are no reviews
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
