import { useQuery, gql } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import { PokemonScreenRouteProp } from '../types/navigation.types';
import useProfile from './useProfile';


const REWIEWLIST_QUERY = gql`
  query ($pokemonID: Int){
    reviews(pokemonID: $pokemonID) {
      content
      score
      date
      user
    }
  }
`;

export default function useReviews() {
    const route = useRoute<PokemonScreenRouteProp>();
    const { id } = route.params;


  const { data, loading, error, refetch } = useQuery(REWIEWLIST_QUERY, { variables: { pokemonID: id } });
//   const profile = useProfile();
    return {
        reviews: data?.reviews || ["whut"],
        refetchReviews: () => {
            refetch();
            // if (profile.refetch) profile.refetch();
        },
    }
}