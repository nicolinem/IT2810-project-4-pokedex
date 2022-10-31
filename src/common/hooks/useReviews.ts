import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams<{ id: string }>();
  const pokemonID = parseInt(id!);

  const { data, loading, error, refetch } = useQuery(REWIEWLIST_QUERY, { variables: { pokemonID } });
  const profile = useProfile();

    return {
        reviews: data?.reviews || ["whut"],
        refetchReviews: () => {
            refetch();
            if (profile.refetch) profile.refetch();
        },
    }
}