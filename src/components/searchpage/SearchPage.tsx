import React, { useState } from "react";
import SearchResult from "./SearchResult";
import { View, TextInput } from 'react-native';
import tw from 'twrnc';
import { TypeButtonContainer } from "./TypeButtonContainer";
import { Accordion } from "./Accordion";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeTypes, setActiveTypes] = useState<String[]>([]);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState<string>("ASC");
  const types = () => {
    return ["ASC", "DESC"];
  };

  
  const getActiveTypes = (activatedTypes: string[]) => {
    const newactivatedTypes: string[] = [...activatedTypes];
    setActiveTypes(newactivatedTypes);
  };


  
  return (
    <View style={tw`flex-1`}>
      
      <View style={tw`bg-[#121A36] w-full flex items-center justify-center pt-5`}>
        
          <TextInput style={tw`bg-[#3F4867] text-[#FFFFFF] rounded-full w-2/3 h-10 pl-5`} placeholder={"Søk"} value={searchText}
                    onChangeText={(text: string) => { setSearchText(text) }} />
        
        <View style={tw`w-full`}>
          <Accordion title={"Filter search"} content={ <TypeButtonContainer getActiveTypes={getActiveTypes}></TypeButtonContainer>}></Accordion>
        </View>

      </View>
      
      <SearchResult
        searchText={searchText.toLowerCase()}
        activeTypes={activeTypes}
        offset={offset}
        sort={sort}
       />

    </View>
  );
};

export default SearchPage;
