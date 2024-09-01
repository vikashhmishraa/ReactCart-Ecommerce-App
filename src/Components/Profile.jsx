import React, { useContext } from "react";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
const Profile = () => {
  const { theme } = useContext(ThemeStore);
  let lightTheme = "min-h-10 bg-white flex flex-col items-center py-10";
  let darkTheme = "min-h-10 bg-base-700 flex flex-col items-center py-10";

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 border-2 border-lime-500">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-lime-500 flex items-center justify-center text-white text-3xl font-bold">
            V
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4">
            vikashmishra
          </h2>
          <p className="text-gray-600">vikas@google.com</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lime-500 text-xl font-semibold">Details</h3>
          <div className="mt-4">
            <p className="text-gray-800">
              <span className="font-semibold">Full Name:</span> Vikash Mishra
            </p>
            <p className="text-gray-800 mt-2">
              <span className="font-semibold">Email:</span> vikas@google.com
            </p>
            <p className="text-gray-800 mt-2">
              <span className="font-semibold">Phone:</span> +91 9953003384
            </p>
            <p className="text-gray-800 mt-2">
              <span className="font-semibold">Address:</span> Noida, Uttar
              Pradesh, India.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full bg-lime-500 text-white py-2 rounded-md hover:bg-lime-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
