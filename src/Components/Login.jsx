import React, { useContext, useState, useEffect } from "react";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import { useFormik } from "formik";
import { loginSchema, signupSchema } from "../utility/validationSchema.js";
import axios from "axios";
import { baseUrl, signupUrl, loginUrl, getUrl } from "../utility/constants.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthPage = () => {
  const { theme } = useContext(ThemeStore);
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const lightTheme =
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-500";
  const darkTheme =
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-green-800";

  let navigate = useNavigate();

  let getUser = async () => {
    try {
      let apiRes = await axios.get(baseUrl + getUrl, { withCredentials: true });

      let data = apiRes?.data;

      console.log(data);

      if (data?.result == true) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "", // Only used for signup
    },
    validationSchema: isLogin ? loginSchema : signupSchema,
    onSubmit: async (values, action) => {
      setIsLoading(true);
      let { userName, email, password } = values;

      let response = await axios.post(
        isLogin ? baseUrl + loginUrl : baseUrl + signupUrl,
        { userName, email, password },
        { withCredentials: true }
      );

      let resData = response.data;

      console.log(resData);
      setIsLoading(false);
      if (resData.result == true) {
        navigate("/");
      } else {
        setIsError(resData.message);
      }

      // Handle form submission
      console.log(values);
      action.resetForm(); // Reset form values after submission

      // Logic for login
      if (isLogin) {
        // Implement login logic here
        console.log("Logging in:", values.email);
      } else {
        // Implement signup logic here
        console.log("Signing up:", values);
      }
      // Prevent switching forms; reset values or handle as needed
    },
  });

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white rounded-lg shadow-xl transition duration-300">
        <h1 className="text-4xl font-extrabold text-lime-600 mb-6 text-center">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h1>
        <form
          className="flex flex-col w-full space-y-5"
          onSubmit={formik.handleSubmit}
        >
          {!isLogin && (
            <div>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.userName}
                onBlur={formik.handleBlur}
                className={`p-4 border rounded-lg w-full ${
                  theme === "light" ? "border-gray-300" : "border-gray-600"
                } focus:outline-none focus:ring focus:ring-lime-500 transition duration-200`}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <p className="text-red-500">{formik.errors.userName}</p>
              ) : null}
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={`p-4 border rounded-lg w-full ${
                theme === "light" ? "border-gray-300" : "border-gray-600"
              } focus:outline-none focus:ring focus:ring-lime-500 transition duration-200`}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className={`p-4 border rounded-lg w-full ${
                theme === "light" ? "border-gray-300" : "border-gray-600"
              } focus:outline-none focus:ring focus:ring-lime-500 transition duration-200`}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500">{formik.errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-4 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow hover:bg-lime-700 transition duration-200"
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : isLogin ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="text-xl text-red-600 ">
            {isError != false ? isError : ""}
          </p>
        </form>
        <p
          className={`mt-5 text-center ${
            theme === "light" ? "text-gray-700" : "text-white"
          }`}
        >
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-lime-600 font-semibold cursor-pointer ml-1 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
