import React, { useState } from "react";
// import Footer from "../common/components/Footer";
import SearchResult from "./SearchResult";
import { StyleSheet, Text, View, TextInput, Button
 } from 'react-native';
import tw from 'twrnc';
import { TypeButtonContainer } from "./TypeButtonContainer";
import { Accordion } from "./Accordion";
import { Accordion2 } from "./Accrodian2";

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



  const getActiveTypes = (activatedTypes: string[]) => {
    const newactivatedTypes: string[] = [...activatedTypes];
    setActiveTypes(newactivatedTypes);
  };

  const handleSubmit = () => {
    setOffset(0);
  };

  
  return (
    <View style={tw`flex-1`}>
      
      <View style={tw`bg-[#121A36] w-full flex items-center justify-center pt-5`}>
        
              <TextInput style={tw`bg-[#3F4867] text-[#FFFFFF] rounded-full w-2/3 h-10 pl-5`} placeholder={"Søk"} value={searchText}
                       onChangeText={(text: string) => {
                           setSearchText(text)
          }} />
        
        <View style={tw`w-full`}>
          <Accordion2 title={"Filter search"} content={ <TypeButtonContainer getActiveTypes={getActiveTypes}></TypeButtonContainer>}></Accordion2>
        </View>

      </View>
      

      <SearchResult
        searchText={searchText.toLowerCase()}
        activeTypes={activeTypes}
        offset={offset}
        sort={sort}
       />


      {/* <Footer></Footer> */}
    </View>
  );
};

export default SearchPage;
