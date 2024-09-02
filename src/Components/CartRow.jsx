import React from "react";
import { useDispatch } from "react-redux";
import {
  QuantityDecrease,
  QuantityIncrease,
  removeCart,
} from "../Store/CartSlice";

const CartRow = ({ obj, removeItem }) => {
  let { data, quantity } = obj;
  let dispatch = useDispatch();
  let { id, thumbnail, price, rating, description, title } = data;

  let totalQuantityPrice = (Number(price) * quantity).toFixed(2);

  let handleRemove = () => {
    console.log("remove Clicked");
    dispatch(removeCart(id));
  };

  let handleQtyIncrease = () => {
    dispatch(QuantityIncrease(id));
  };
  let handleQtyDecrease = () => {
    dispatch(QuantityDecrease(id));
  };
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center w-1/4">
        <img src={thumbnail} alt="Product" className="w-24 h-24 rounded-md" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <p className="text-gray-500">{rating} Star</p>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <p className="text-gray-500">₹{price}</p>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <button
          onClick={handleQtyDecrease}
          className="bg-lime-500 text-white px-3 py-1 rounded-md hover:bg-lime-600"
        >
          -
        </button>
        <span className="mx-4 text-lg font-medium">{quantity}</span>
        <button
          onClick={handleQtyIncrease}
          className="bg-lime-500 text-white px-3 py-1 rounded-md hover:bg-lime-600"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <p className="text-xl font-semibold">₹{totalQuantityPrice}</p>
      </div>
      <div className="w-16 text-center">
        <button
          onClick={handleRemove}
          className="border-2 border-red-500 text-red-500 px-2 py-2 rounded-md hover:bg-red-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={20}
            height={20}
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartRow;
