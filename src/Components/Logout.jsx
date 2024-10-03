import React from "react";
import axios from "axios";
import { baseUrl, logoutUrl } from "../utility/constants.js";
import { deleteUser } from "../Store/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleLogout = async () => {
    try {
      let apiRes = await axios.post(
        baseUrl + logoutUrl,
        {},
        { withCredentials: true }
      );
      let data = apiRes?.data;
      if (data?.result == true) {
        dispatch(deleteUser());
        navigate("/login");
      }
    } catch (err) {}
  };
  return (
    <div className="p-2">
      <button
        className="btn btn-outline btn-error transition-transform transform hover:scale-105 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 rounded-lg shadow-lg"
        onClick={handleLogout}
      >
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
          </svg>
         <span className="text-[16px]">Logout</span>
        </span>
      </button>
    </div>
  );
};

export default Logout;
