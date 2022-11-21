import { useQuery } from '@apollo/client';
import { Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PokemonScreenRouteProp } from '../../types/navigation.types';
import { getImageUrl } from '../../utils/match.utils';
import StatBar from './StatBar';
import { parsePokemonData } from '../../utils/data.utils';
import tw from 'twrnc';
import TypeLabel from '../TypeLabel';
import { Pokemon } from '../../types/pokemon.utils';
import { GET_POKEMON } from '../../utils/queries';
import useReviews from '../../hooks/useReviews';
import Reviews from './Reviews';
import { Accordion } from '../searchpage/Accordion';
import { colorMapping } from '../../types/types.utils';







export const PokemonPage = () => {
  const route = useRoute<PokemonScreenRouteProp>();
  const { reviews, refetchReviews } = useReviews();
  const { id } = route.params;

  

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
  const pokemon: Pokemon = getPokemonOnID[0];
  const color = colorMapping[pokemon.type1.toLowerCase()];




  return (
     <ScrollView >
     
        <View
          style={tw`w-full flex items-center justify-center`}
          
        >
          <Image
            style={tw`w-52 h-52`}
            source={{
              uri: getImageUrl(getPokemonOnID[0].pokemonID),
            }}
          
          />
        <Text style={tw`font-bold text-center uppercase text-md`}>{getPokemonOnID[0].name} </Text>
        
        <View style={tw`flex flex-row mt-2`}>
          <TypeLabel type={pokemon.type1} />
        
        {pokemon.type2 &&
          <TypeLabel type={pokemon.type2} />
        }
          
        </View>
        
        {pokemonStats.map((item) => <StatBar color={ color} stat={item.value} statName={item.name} ></StatBar>)}
          
          </View>
          
          <View style={tw`flex flex-1 mt-5 w-full`}>
          </View>

          <Accordion title={"Reviews"} content={<Reviews reviews={reviews} refetchReviews={refetchReviews }></Reviews>}></Accordion>
          
      </ScrollView>
  )
    
  
}
