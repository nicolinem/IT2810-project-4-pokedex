import React, { useState } from "react";
import { Accordion } from "../common/components/button/Accordion";
import Button from "../common/components/button/Button";
import DropDown from "../common/components/button/DropDown";
import SortByButton from "../common/components/button/DropDown";
import Footer from "../common/components/Footer";
import Header from "../common/components/header/Header";
import SearchResult from "../common/components/searchResult/SearchResult";
import { TypeButtonContainer } from "../common/components/TypeButtonContainer";
import { usePokemonQuery } from "../utils/queries";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeTypes, setActiveTypes] = useState<String[]>([]);
  const [offset, setOffset] = useState(0);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [sort, setSort] = useState<string>("ASC");
  const types = () => {
    return ["ASC", "DESC"];
  };


   const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
   };
  
   const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
   };
  
   const typeSelection = (type: string): void => {
    setSort(type);
  };

  const { loading, error, data, fetchMore } = usePokemonQuery(
    searchText,
    activeTypes,
    offset,
    sort
  );

  const getActiveTypes = (activatedTypes: string[]) => {
    const newactivatedTypes: string[] = [...activatedTypes];
    setActiveTypes(newactivatedTypes);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOffset(0);
    const data = new FormData(event.currentTarget);
    const input = data.get("input");
    if (input) {
      setSearchText(input.toString());
    } else {
      setSearchText("");
    }
  };

  return (
    <div className="h-screen">
      <Header></Header>

      <div className="bg-[#121A36] flex items-center justify-center pt-[100px] h-[200px]">
        <form onSubmit={handleSubmit} className="space-x-3">
          <input
            className="bg-[#3F4867] text-[#FFFFFF] placeholder-[#FFFFFF] rounded-full pl-5
              xs:w-[300px] sm:w-[400px] md:[550px] lg:w-[570px] xl:w-[600px]
              xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16"
            placeholder="Enter pokemon name or number"
            name="input"
            id="input"
          />
          <Button type={"submit"}>Search</Button>
        </form>
      </div>
      <div className="bg-[#121A36] justify-items-center	">
        <Accordion
          title={"Advanced search"}
          content={<div className="my-10"><TypeButtonContainer getActiveTypes={getActiveTypes} />
            <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="text-white mt-5 bg-[#475569] hover:bg-[#334155] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{sort ? "Sort by: " + sort : "Sort by..."} </div>
        {showDropDown && (
          <DropDown
            types={types()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            typeSelection={typeSelection}
          />
              )}
              

      </button></div>}
        ></Accordion>
      </div>
      <div id="cards" className="flex flex-col items-center justify-center">
        <SearchResult
          searchText={searchText}
          activeTypes={activeTypes}
          offset={offset}
          sort={sort}
        ></SearchResult>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SearchPage;
