import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { StyleSheet, Text, View, AppRegistry, Image, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { PokemonScreenRouteProp } from './src/types/navigation.types';
import { getImageUrl } from './src/utils/match.utils';
import { colorMapping } from './src/types/types.utils';
import StatBar from './src/components/StatBar';
import { parsePokemonData } from './src/utils/data.utils';
import tw from 'twrnc';


type RootStackParamList = {
  Home: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
};

 export const GET_POKEMON = gql`
    query ($input: Int) {
      getPokemonOnID(input: $input) {
        name
        pokemonID
        attack
        defence
        sp_attack
        sp_defence
        speed
        height
        weight
        hp
        imageUrl
        type1
        type2
      }
    }
  `;

export const Testquery = () => {
  const route = useRoute<PokemonScreenRouteProp>();
  const { id } = route.params;
  console.log("params ", id);

  


  const { error, loading, data } = useQuery(GET_POKEMON, {
    variables: { input: id },
  });

  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <Text>Error</Text>;
  }

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (!data) {
    return <></>;
  }
  const { getPokemonOnID } = data;
  const pokemonStats = parsePokemonData(getPokemonOnID[0]);
  

  return (
    <View
      style={tw`w-full flex items-center justify-center`}
    >
       <Image
        style={styles.pokemonImage}
        source={{
          uri: getImageUrl(getPokemonOnID[0].pokemonID),
        }}
       
      />
      <Text>{getPokemonOnID[0].name} </Text>
       <Text
              style={{
                ...styles.typeText,
                backgroundColor: colorMapping[getPokemonOnID[0].type1.toLowerCase()]
              }}
                >
              {getPokemonOnID[0].type1}
      </Text>
            {getPokemonOnID[0].type2 &&  <Text
              style={{
                ...styles.typeText,
                backgroundColor: colorMapping[getPokemonOnID[0].type2.toLowerCase()]
              }}
                >
              {getPokemonOnID[0].type2}
      </Text>}
      <View style={tw`flex mt-5 w-full`}>

      <FlatList
        // 
        data={pokemonStats}
          renderItem={({ item }) => <StatBar stat={item.value} statName={item.name} ></StatBar>} />
        </View>
      
      </View>
  )
    
  
}
  const styles = StyleSheet.create({
    container: {
    borderColor: 'black',
    borderWidth:1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    pokemonImage: {
    width: 200,
    height: 200,
    }, typeText: {
    width: 200,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 'auto',
    textAlign: 'center',
    fontSize: 12,
    borderRadius: 7,
    color: 'white',
    textTransform: 'capitalize',
    overflow: "hidden",
  }
});
