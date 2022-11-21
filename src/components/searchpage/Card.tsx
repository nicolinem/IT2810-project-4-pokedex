import React from "react";
import { getImageUrl } from "../../utils/match.utils";
import {  Pokemon } from "../../types/pokemon.utils";
import { View, Image, Text, TouchableOpacity } from "react-native"
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { CardNavigationProp } from '../../types/navigation.types';
import TypeLabel from "../TypeLabel";
import { colorMapping } from "../../types/types.utils";

type Props = {
  pokemon: Pokemon;
};


const Card: React.FC<Props> = ({ pokemon }) => {
  const navigation = useNavigation<CardNavigationProp>();
  const pokemonimage = getImageUrl(pokemon.pokemonID);
    const color = colorMapping[pokemon.type1.toLowerCase()];

  return (
    <TouchableOpacity style={tw`w-2/5 ` } onPress={() => {navigation.navigate('Pokemon', {id: pokemon.pokemonID})}}> 
      <View
        style={tw`mt-5 w-full bg-opacity-30 bg-[${color}] flex flex-col content-start justify-start items-center py-4 border-gray-400 rounded-lg shadow-lg`}
      >
       

        {/* <View style={tw`bg-white w-full shadow-md` }> */}
        <Text style={tw`my-3 font-bold text-[${color}] capitalize w-full text-center`}>
                {pokemon.name}
        </Text>
        
        {/* <TypeLabel type={pokemon.type1} />
       
        {pokemon.type2 &&
          <TypeLabel type={pokemon.type2}/>
          } */}
        {/* </View> */}
         <Image
          style={tw`w-32 h-32`}
          source={{
            uri: pokemonimage,
          }} />
      </View>
    </TouchableOpacity>
  );
};



export default Card;
