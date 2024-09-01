import React from "react";

const filters = () => {
  return (
    <>
      <div className="flex h-16 bg-white items-center justify-around">
        <button className="btn btn-warning">Top Rated</button>
        <button className="btn btn-warning">Furnitures</button>

        <div className="input input-bordered w-[500px] pt-3 ">
          <input type="text" placeholder="Type here" className="relative " />
          <button className=" absolute bg-lime-500 hover:bg-lime-700 text-black rounded-md  px-8 py-2  ml-[187px] mt-[-9px] ">
            Search
          </button>
        </div>
        <button className="btn btn-warning">Grocery</button>
        <button className="btn btn-warning">Beauty</button>
      </div>
    </>
  );
};

export default filters;
