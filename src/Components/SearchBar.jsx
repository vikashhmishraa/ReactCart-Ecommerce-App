import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <>
      <div className="input input-bordered w-[500px] pt-3">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Type here"
          className="relative w-full tracking-wide text-[#064C4F] "
        />
        <button
          onClick={() => handleSearch(query)}
          className="absolute bg-lime-500 hover:bg-lime-600 text-white rounded-md  px-8 py-2  ml-[-102px] mt-[-9px] "
        >
          Search
        </button>
      </div>
      {console.log(query)}
    </>
  );
};

export default SearchBar;
