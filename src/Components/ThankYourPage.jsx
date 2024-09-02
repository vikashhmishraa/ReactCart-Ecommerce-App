import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";

const ThankYouPage = () => {
  const { theme } = useContext(ThemeStore);

  let lightTheme =
    "flex flex-col items-center justify-center h-[600px] bg-white p-4";
  let darkTheme =
    "flex flex-col items-center justify-center h-[600px] bg-base-700 p-4";

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md text-center animate__animated animate__fadeIn border-2 border-lime-500">
        <i className="ri-checkbox-circle-fill text-lime-500 text-6xl mb-4 animate__animated animate__bounceIn"></i>
        <h1 className="text-3xl font-bold text-lime-500 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your order has been successfully placed.
        </p>
        <p className="text-gray-600 mb-8">
          We appreciate your purchase and are excited to serve you again. You
          will receive a confirmation email with your order details shortly.
        </p>
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="bg-lime-500 text-white px-6 py-2 rounded-md hover:bg-lime-600 mb-4 flex items-center justify-center animate__animated animate__pulse"
          >
            <i className="ri-shopping-cart-fill mr-2"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
