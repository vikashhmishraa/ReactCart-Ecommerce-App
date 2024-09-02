import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, setTheme } = useContext(ThemeStore);
  console.log("-->", theme, setTheme);

  const cartData = useSelector((store) => store.cart.cart);
  console.log("cart", cartData.length);

  const handleFoodClick = () => {
    navigate("/order-food");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };

  let lightTheme =
    " width-screen flex justify-between items-center  bg-[#064C4F] text-white mx-4 my-4   px-6 rounded-md";
  let darkTheme =
    "width-screen flex justify-between items-center  bg-black text-white mx-4 my-4   px-6 rounded-md";
  const handleThemeChange = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let ScrolledNav =
    "w-full fixed  top-[-16px] left-[-16px] z-50 px-[-4px] rounded-none";
  let NonScrolledNav = "w-[98vw]   z-50  rounded-md ";

  return (
    <>
      {/* {console.log(query)} */}
      <div
        className={`${theme === "light" ? lightTheme : darkTheme} ${
          isScrolled ? ScrolledNav : NonScrolledNav
        } transition-all duration-300`}
      >
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={30}
            className="text-lime-500"
          >
            <path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
          </svg>
          <Link to="/" className="text-2xl font-bold hover:text-lime-500">
            React Cart
          </Link>
        </div>
        <SearchBar />

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <div
              onClick={handleFoodClick}
              className="bg-white p-4 mx-4 rounded-lg text-lime-800 font-bold cursor-pointer hover:bg-lime-200 hover:transition ease-in-out delay-150 hover:scale-95"
            >
              Order Food
            </div>
            <li>
              <Link to={"/cart"}>
                <div className="relative cursor-pointer p-3 rounded-full bg-white text-lime-500 hover:bg-lime-500 hover:text-white transition-colors hover:border-dashed border-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    fill="currentColor"
                  >
                    <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                  </svg>
                </div>
                {cartData.length > 0 ? (
                  <sup className="flex bg-red-700 h-5 w-5 items-center justify-center m-[-25px] mt-[-50px] rounded-xl">
                    <b>{cartData.length}</b>
                  </sup>
                ) : (
                  <div></div>
                )}
              </Link>
              {/* <a className="text-xl">Cart</a> */}
            </li>
            <li>
              <div onClick={handleProfileClick} className="mr-16">
                {/* <div className=" mask mask-squircle w-10 rounded">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div> */}
                <div className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center text-white text-2xl font-bold">
                  V
                </div>
                <div className="mx-2">
                  <p className="flex text-xl justify-end ">Hey Vikas!</p>
                  <p>{getGreeting()}</p>
                </div>
              </div>
            </li>
            <div className="absolute ml-[435px] bg-lime-200 px-4 py-[25px] rounded-md">
              <label className="grid cursor-pointer place-items-center">
                <input
                  onClick={handleThemeChange}
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                />
                <svg
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
