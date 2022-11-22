import React, { SetStateAction, useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { View, TextInput, Text, Button } from 'react-native';
import tw from 'twrnc';
import { TypeButtonContainer } from "./TypeButtonContainer";
import { Accordion } from "./Accordion";
import { SelectList } from "react-native-dropdown-select-list";
import { sortData } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeTypes, setActiveTypes] = useState<String[]>([]);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState<string>("ASC");
  
 
  
  const getActiveTypes = (activatedTypes: string[]) => {
    const newactivatedTypes: string[] = [...activatedTypes];
    setActiveTypes(newactivatedTypes);
  };
  
  return (
    <View style={tw`flex-1`}>

      
      <View style={tw`bg-[#121A36] w-full flex items-center justify-center pt-1`}>

        
          <TextInput style={tw`bg-[#3F4867] text-[#FFFFFF] rounded-full w-2/3 h-9 pl-5`} placeholder={"Søk"} value={searchText}
                    onChangeText={(text: string) => { setSearchText(text) }} />
        
        <View style={tw`w-full pb-2`}>
          <Accordion title={"Filter search"} content={ <View>
            <TypeButtonContainer getActiveTypes={getActiveTypes}></TypeButtonContainer>

            
            <SelectList
              
              boxStyles={tw`w-2/3 mx-auto mb-3 py-2 rounded-full`}
              inputStyles={tw`text-white text-sm mx-auto`}
              dropdownTextStyles={tw`text-white text-sm text-center`}
              dropdownStyles={tw`mb-3`}
              search={false}
              defaultOption={ {key:'5', value:'Sort by'}}
              setSelected={(val: SetStateAction<string>) => {
                if (val === "ID Ascending") {
                setSort("ASC")
                } else if (val === "ID Descending") {
                  setSort("DESC")
              }}} 
              data={sortData} 
              save="value"
              />
           </View>}/>
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
