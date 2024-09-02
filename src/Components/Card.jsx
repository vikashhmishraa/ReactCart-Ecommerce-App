import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import { addCart } from "../Store/CartSlice.js";
import { useDispatch } from "react-redux";

const Card = ({ productData }) => {
  let dispatch = useDispatch();
  let { title, id, category, price, rating, thumbnail } = productData;
  const { theme } = useContext(ThemeStore);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddtoCart = (event) => {
    event.stopPropagation();
    // console.log("Item Added to Cart");
    dispatch(addCart(productData));
  };

  let lightTheme =
    "card bg-base-100 w-96 shadow-xl m-4 border-solid border-2 border-lime-400";
  let darkTheme =
    "card bg-base-900 w-96 shadow-xl m-4 border-solid border-2 border-lime-400 text-white";

  return (
    <>
      <div
        className={theme == "light" ? lightTheme : darkTheme}
        onClick={handleClick}
      >
        <figure>
          <img loading="lazy" src={thumbnail} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Category : {category}</p>
          <p>Rating : {rating}</p>
          <p>Price : ₹ {price}</p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-lime-500 hover:bg-lime-700"
              onClick={handleAddtoCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
