import { Search } from "lucide-react";
import Form from "next/form"
import React from 'react'
import SearchFormReset from "./SearchFormReset";


const SearchForm = () => {
  return (
    <div>
      <Form action={"/"} className=" search-form mx-4">
        <div className="relative w-full max-w-xl mx-auto border-1 flex justify-center items-center border-black rounded-full">
          <input
            name="query"
            type="text"
            className=" w-full text-gray-800 py-3 px-4  focus:outline-none "
            placeholder="Search..."
          />
          <div className="flex mx-4">
            { <SearchFormReset />}

            <button type="submit" className="search-btn">
              <Search className="size-5" />
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm
