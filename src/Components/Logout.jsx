import React from 'react'
import axios from 'axios';
import { baseUrl  , logoutUrl } from '../utility/constants.js';
import { deleteUser } from '../Store/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let handleLogout = async () => {
        try{
        let apiRes = await axios.post(baseUrl+logoutUrl , {} , {withCredentials: true });
        let data = apiRes?.data;
        if(data?.result == true ){
            dispatch(deleteUser());
            navigate("/login")
        }
        }catch(err){

        }

    }
  return (
    <div className="p-2">
    <button
      className="btn btn-outline btn-error transition-transform transform hover:scale-105 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 rounded-lg shadow-lg"
      onClick={handleLogout}
    >
      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h-4a2 2 0 01-2-2V7m6 10l4-4m-4 4l-4-4" />
        </svg>
        Logout
      </span>
    </button>
  </div>
  
  )
}

export default Logout