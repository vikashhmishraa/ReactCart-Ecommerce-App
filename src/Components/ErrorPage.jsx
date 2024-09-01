import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();

  let handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[61vh] bg-white">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-lime-500">404</h1>
          <h2 className="text-4xl mt-4 text-gray-700">Oops! Page Not Found</h2>
          <p className="mt-2 text-gray-500">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <div className="mt-8">
            <button
              className="btn btn-outline btn-lime-500"
              onClick={handleClick}
            >
              Go Back Home
            </button>
          </div>
          {/* <div className="mt-4">
            <img
              src="https://images.unsplash.com/5/unsplash-bonus.jpg?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Error Image"
              className="mx-auto rounded-lg shadow-lg border-2 border-lime-500"
            />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
