import React, { useContext, useState, useEffect } from "react";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import CartRow from "./CartRow.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Store/CartSlice.js";

const Cart = () => {
  const { theme } = useContext(ThemeStore);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cart);
  const [sortedCartData, setSortedCartData] = useState(cartData);
  const [sortOrder, setSortOrder] = useState({
    rating: "asc",
    price: "asc",
    quantity: "asc",
    totalPrice: "asc",
  });

  useEffect(() => {
    setSortedCartData(cartData);
  }, [cartData]);

  const handleSort = (key, totalPrice = false) => {
    let order = sortOrder[key] === "asc" ? "desc" : "asc";
    let sortedData = [...sortedCartData].sort((a, b) => {
      const aValue = totalPrice ? a.data.price * a.quantity : a.data[key];
      const bValue = totalPrice ? b.data.price * b.quantity : b.data[key];

      if (order === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    setSortOrder({ ...sortOrder, [key]: order });
    setSortedCartData(sortedData);
  };

  const handleSortRating = () => handleSort("rating");
  const handleSortPrice = () => handleSort("price");
  const handleSortQuantity = () => handleSort("quantity");
  const handleSortTotalPrice = () => handleSort("price", true);

  const handleClearCart = () => {
    console.log("clear clicked");
    dispatch(clearCart());
  };
  // Calculate the total of total prices
  const totalAmount = sortedCartData.reduce((total, item) => {
    console.log("item.quantity", item.quantity);
    return total + item.data.price * item.quantity;
  }, 0);

  return (
    <div
      className={
        theme === "light"
          ? "min-h-[60vh] bg-white py-8 px-4"
          : "min-h-[60vh] bg-base-700 py-8 px-4"
      }
    >
      <h1 className="text-3xl font-bold text-lime-600 mb-6">Your Cart</h1>

      <div
        className={
          theme === "light"
            ? "bg-white p-6 rounded-lg shadow-md border-2 border-lime-500"
            : "bg-base-400 p-6 rounded-lg shadow-md shadow-lime-500 border-2 border-lime-500 text-white"
        }
      >
        {/* Headings for Cart Items with Sorting UI */}
        <div className="flex items-center justify-between mb-4 font-bold text-lg border-b pb-2">
          <div className="w-1/4">Product Name</div>
          <div
            className="w-1/6 text-center cursor-pointer flex items-center justify-center"
            onClick={handleSortRating}
          >
            Rating <i className="ri-arrow-up-down-line ml-1"></i>
          </div>
          <div
            className="w-1/6 text-center cursor-pointer flex items-center justify-center"
            onClick={handleSortPrice}
          >
            Price <i className="ri-arrow-up-down-line ml-1"></i>
          </div>
          <div
            className="w-1/6 text-center cursor-pointer flex items-center justify-center"
            onClick={handleSortQuantity}
          >
            Quantity
          </div>
          <div
            className="w-1/6 text-center cursor-pointer flex items-center justify-center"
            onClick={handleSortTotalPrice}
          >
            Total Price <i className="ri-arrow-up-down-line ml-1"></i>
          </div>
          <div className="w-16 text-center cursor-pointer flex items-center justify-center">
            Remove
          </div>
        </div>

        {/* Render Sorted Cart Items */}
        {sortedCartData.map((cartObj) => (
          <CartRow key={cartObj.id} obj={cartObj} />
        ))}

        <div className="flex justify-between items-center border-t pt-4">
          <h2 className="text-2xl font-semibold">Total:</h2>
          <p className="text-2xl font-bold">₹ {totalAmount.toFixed(2)}</p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-800"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button className="bg-lime-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-lime-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
