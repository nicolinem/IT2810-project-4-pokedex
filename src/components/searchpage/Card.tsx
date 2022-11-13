import React from "react";
import { getImageUrl } from "../../utils/match.utils";
import {  Pokemon } from "../../types/pokemon.utils";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import tw from 'twrnc';
import { colorMapping } from "../../types/types.utils";
import { useNavigation } from '@react-navigation/native';
import { CardNavigationProp } from '../../types/navigation.types';

type Props = {
  pokemon: Pokemon;
};


const Card: React.FC<Props> = ({ pokemon }) => {
  const navigation = useNavigation<CardNavigationProp>();
  const pokemonimage = getImageUrl(pokemon.pokemonID);
  console.log("image: ", pokemonimage);

  return (
    <TouchableOpacity style={tw`w-2/5` } onPress={() => {navigation.navigate('Pokemon', {id: pokemon.pokemonID})}}> 
    <View
      style={tw`mt-5 w-full flex flex-col content-start justify-start items-center py-4 bg-white border-gray-400 rounded-lg shadow-lg bg-white`}
    >
      <Image
        style={styles.pokemonImage}
        source={{
          uri: pokemonimage,
        }}
       
      />
            <Text
              style={tw`my-3 font-bold capitalize w-full text-center`}
                >
              {pokemon.name}
      </Text>
      
            <Text
              style={{
                ...styles.typeText,
                backgroundColor: colorMapping[pokemon.type1.toLowerCase()]
              }}
                >
              {pokemon.type1}
            </Text>
      </View>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  typeText: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 'auto',
    textAlign: 'center',
    fontSize: 12,
    borderRadius: 7,
    color: 'white',
    textTransform: 'capitalize',
    overflow: "hidden",
  },
  pokemonImage: {
    width: 120,
    height: 120,
  }
});

export default Card;
