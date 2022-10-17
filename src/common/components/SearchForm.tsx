import React, { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  //sets the search query when the user press the search button
  const getSearchResults = () => {
    setQuery(searchText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //TODO
  };

  return (
    <div className="flex items-center justify-center pt-[100px]">
      <input
        className="bg-[#3F4867] text-[#FFFFFF] placeholder-[#FFFFFF] rounded-full 
              w-[600px] h-16 pl-5"
        onChange={onChangeSearchField}
        name="Pokemon name or number"
        placeholder="Enter pokemon name or number"
        value={searchText}
        //trenger vi en type={text}
      />

      <button
        className="bg-[#e36d8f] text-[#FFFFFF] rounded-full 
              h-16 w-16"
        onClick={getSearchResults}
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
