import React from "react";
import { getImageUrl } from "../../utils/match.utils";
import {  Pokemon } from "../../types/pokemon.utils";
import { View, Image, Text, TouchableOpacity } from "react-native"
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { CardNavigationProp } from '../../types/navigation.types';
import TypeLabel from "../TypeLabel";

type Props = {
  pokemon: Pokemon;
};


const Card: React.FC<Props> = ({ pokemon }) => {
  const navigation = useNavigation<CardNavigationProp>();
  const pokemonimage = getImageUrl(pokemon.pokemonID);

  return (
    <TouchableOpacity style={tw`w-2/5` } onPress={() => {navigation.navigate('Pokemon', {id: pokemon.pokemonID})}}> 
      <View
        style={tw`mt-5 w-full flex flex-col content-start justify-start items-center py-4 bg-white border-gray-400 rounded-lg shadow-lg bg-white`}
      >
        <Image
          style={tw`w-32 h-32`}
          source={{
            uri: pokemonimage,
          }} />

        <Text style={tw`my-3 font-bold capitalize w-full text-center`}>
                {pokemon.name}
        </Text>
        
        <TypeLabel type={pokemon.type1} />
       
        {pokemon.type2 &&
          <TypeLabel type={pokemon.type2}/>
        }
      </View>
    </TouchableOpacity>
  );
};



export default Card;
