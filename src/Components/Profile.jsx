import React, { useContext, useRef, useState } from "react";
import { ThemeStore } from "../Components/ContextStores/ThemeContext.jsx";
import { useSelector, useDispatch } from "react-redux";
import { baseUrl, updateUrl, deleterUrl } from "../utility/constants.js";
import axios from "axios";
import { addUser } from "../Store/UserSlice.js";
import Delete from "./Delete.jsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { theme } = useContext(ThemeStore);
  const lightTheme = "min-h-[75vh] bg-white flex flex-col items-center py-10";
  const darkTheme = "min-h-[75vh] bg-base-700 flex flex-col items-center py-10";

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const { userName, email, phoneNumber } = userData.user;

  const updateUserName = useRef("");
  const updateEmail = useRef("");
  const updatePhone = useRef("");

  let navigate = useNavigate();

  const handleUpdate = async () => {
    const updatedName = updateUserName.current.value;
    const updatedEmail = updateEmail.current.value;
    const updatedPhone = updatePhone.current.value;
    setIsLoading(true);
    try {
      const apiRes = await axios.patch(
        baseUrl + updateUrl,
        {
          userName: updatedName,
          email: updatedEmail,
          phoneNumber: updatedPhone,
        },
        { withCredentials: true }
      );
      const data = apiRes.data;

      console.log(data);

      if (data?.result === true) {
        dispatch(addUser(data.data));
      }

      // Close the modal after updating
      document.getElementById("my_modal_2").close();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleDelete = async () => {
    console.log("Clicked on delete button");
    setIsLoading(true);
    try {
      const apiRes = await axios.delete(baseUrl + deleterUrl, {
        withCredentials: true,
      });
      console.log("off on delete button");
    } catch (err) {
      console.log(err);
    } finally {
      // navigate("/");
      window.location.reload();
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 border-2 border-lime-500">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-lime-500 flex items-center justify-center text-center  text-white font-bold">
            <div className=" text-6xl ">{userName.charAt(0)}</div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4">
            {userName}
          </h2>
          <p className="text-gray-600">{email}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lime-500 text-xl font-semibold">Details</h3>
          <div className="mt-4">
            <p className="text-gray-800">
              <span className="font-semibold">UserName:</span> {userName}
            </p>
            <p className="text-gray-800 mt-2">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="text-gray-800 mt-2">
              <span className="font-semibold">Phone:</span> {phoneNumber}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="w-full bg-lime-500 text-white py-2 rounded-md hover:bg-lime-600"
            onClick={() => {
              // Reset the input fields when opening the modal
              updateUserName.current.value = userName;
              updateEmail.current.value = email;
              updatePhone.current.value = phoneNumber;
              document.getElementById("my_modal_2").showModal();
            }}
          >
            Edit Profile
          </button>
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-white shadow-lg rounded-lg border-2 border-lime-500 p-6">
            <h3 className="text-lime-500 text-xl font-semibold mb-4">
              Update Profile
            </h3>
            <div className="mb-4">
              <input
                className="input input-bordered w-full mb-2"
                placeholder="UserName"
                ref={updateUserName}
              />
              <input
                disabled="true"
                className="input input-bordered w-full mb-2"
                placeholder="Email"
                ref={updateEmail}
              />
              <input
                className="input input-bordered w-full"
                placeholder="Phone Number"
                ref={updatePhone}
              />
            </div>

            <div className="flex justify-between">
              <button
                className="btn bg-lime-500 text-white hover:bg-lime-600"
                onClick={handleUpdate}
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Update"
                )}
              </button>
              <button
                className="btn btn-outline border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white"
                onClick={() => document.getElementById("my_modal_2").close()}
              >
                Close
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button className="hidden">Close</button>
          </form>
        </dialog>
        <Delete handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Profile;
