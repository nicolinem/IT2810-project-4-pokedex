import {  Text, View, FlatList } from 'react-native';
import { Pokemon } from '../../types/pokemon.utils';
import { usePokemonQuery } from '../../utils/queries';
import Card from "./Card";
import tw from 'twrnc';
import { useState } from 'react';


interface Props {
    searchText: string;
    activeTypes: String[];
    offset: number;
  sort: string
}


const SearchResult = (props: Props) => {
  

const { loading, error, data, fetchMore } = usePokemonQuery(props.searchText, props.activeTypes, props.offset, props.sort);

if (error) {
  console.log(JSON.stringify(error, null, 2));
}

  const handleLoadMore = () => {
    fetchMore({
            variables: {
                offset: data.pokemon.length
            },
      updateQuery: (prevState: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult || data.pokemon.length === 0) return prevState;
                return {
                    ...prevState,
                    pokemon: [...prevState.pokemon, ...fetchMoreResult.pokemon]

                };
            }

    });
    
    
  }
     
  if (loading) {
        return (
            <View >
                <Text>Laster inn...</Text>
            </View>
        )
     }
  
    if (error || !data) {
      return (
          <View >
              <Text>Klarte ikke å laste inn.</Text>
          </View>
      )
  }

   
    
    
  return (
      <View style={tw`w-full flex-1`}>
        <FlatList
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 50 }}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd < 3) handleLoadMore()
        }}
        data={data.pokemon}
        renderItem={({ item }) => <Card pokemon={item} />}
      /> 
    </View>
  )
}


export default SearchResult