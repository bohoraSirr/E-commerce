import React, { useState } from "react";
import { HiMiniMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchBar); // Placeholder for search logic
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen ? (
        <form className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchBar}
              onChange={(e) => setSearchBar(e.target.value)}
              className="bg-gray-100 px-4 py-5 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* Search Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMiniMagnifyingGlass className="h-6 w-6" />
            </button>
            <button>
              <HiMiniXMark
                className="h-6 w-6"
                onClick={() => setIsOpen(false)}
              />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMiniMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
