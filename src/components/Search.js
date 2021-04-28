import React from "react";

export const Search = () => {
  return (
    <div classNameName="max-w-sm rounded overflow-hidden my-10 max-auto">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
            placeholder="Search..."
            type="text"
          />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
