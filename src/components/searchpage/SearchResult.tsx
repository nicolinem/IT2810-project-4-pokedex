import {  Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, ScrollView } from 'react-native';
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
  
const [loadMore, setLoadMore] = useState(false);
    const { loading, error, data, fetchMore } = usePokemonQuery(props.searchText, props.activeTypes, props.offset, props.sort);

    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }

  const handleLoadMore = () => {
    setLoadMore(true);
    fetchMore({
            variables: {
                offset: data.pokemon.length
            },
      updateQuery: (prevState: any, { fetchMoreResult }: any) => {
              // console.log(prevState, fetchMoreResult);
        if (!fetchMoreResult || data.pokemon.length === 0) return prevState;
        setLoadMore(false);
                return {
                    ...prevState,
                    pokemon: [...prevState.pokemon, ...fetchMoreResult.pokemon]

                };
            }

    });
    
    
  }
     
  if (loading) {
      //  console.log("loading")
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
        onScrollBeginDrag={() => console.log("start")}
        onEndReached={({ distanceFromEnd }) => {
          console.log(distanceFromEnd)
          if (distanceFromEnd < 3) handleLoadMore()
        }}
        data={data.pokemon}
        renderItem={({ item }) => <Card pokemon={item} />}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default SearchResult