import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/UserSlice.js";
import { baseUrl, getUrl } from "../utility/constants.js";
import SkeletionUI from "./Skeletons/SkeletionUI";

const AuthWrapper = ({ children }) => {
  let [isUser, setIsUser] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  let dispatch = useDispatch();

  let getUser = async () => {
    setIsLoading(true);
    let apiRes = await axios.get(baseUrl + getUrl, { withCredentials: true });

    let data = apiRes?.data;

    if (data?.result == true) {
      setIsUser(true);
    //   console.log("data",data)
    //   console.log("data data",data.da)

      dispatch(addUser(data.data));
    } else {
      setIsUser(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading == true) {
    return <SkeletionUI></SkeletionUI>;
  }

  return <>{isUser ? children : <Navigate to="/login"></Navigate>}</>;
};



export default AuthWrapper;
