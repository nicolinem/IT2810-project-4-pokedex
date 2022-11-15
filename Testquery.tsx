import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { StyleSheet, Text, View, AppRegistry, Image, useWindowDimensions, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { PokemonScreenRouteProp } from './src/types/navigation.types';
import { getImageUrl } from './src/utils/match.utils';
import StatBar from './src/components/StatBar';
import { parsePokemonData } from './src/utils/data.utils';
import tw from 'twrnc';
import TypeLabel from './src/components/TypeLabel';
import { Pokemon } from './src/types/pokemon.utils';
import { GET_POKEMON } from './src/utils/queries';
import { TabView, SceneMap } from 'react-native-tab-view';
import useReviews from './src/hooks/useReviews';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BlurView } from 'expo-blur';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Accordion2 } from './src/components/searchpage/Accrodian2';
import Reviews from './src/components/Reviews';

// import Ionicons from 'react-native-vector-icons/Ionicons';






//   const Reviews = () => (<View></View>)
  



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}




export const Testquery = () => {
  const route = useRoute<PokemonScreenRouteProp>();
   const { reviews, refetchReviews } = useReviews();
  const { id } = route.params;

  const Tab = createMaterialBottomTabNavigator();
  

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





  return (
    <ScrollView >
     
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
       <TypeLabel type={pokemon.type1}/>
      
      <TypeLabel type={pokemon.type2} />

       </View>
      
       <View style={tw`flex flex-1 mt-5 w-full`}>

        {pokemonStats.map((item) => <StatBar stat={item.value} statName={item.name} ></StatBar>)}

      </View>

      <Accordion2 title={"Reviews"} content={<Reviews reviews={reviews} refetchReviews={refetchReviews }></Reviews>}></Accordion2>
      
     
      </ScrollView>
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
