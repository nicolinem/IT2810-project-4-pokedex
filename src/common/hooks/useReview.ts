import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

const REVIEW = gql`
  mutation Review($score: Float = 0, $content: String = "", $pokemonID: Int = 1, $date: String = "", $user: String = "") {
    NewReview(content: $content, score: $score, pokemonID: $pokemonID, date: $date, user: $user) {
      _id
    }
  }
`;

export function useReview(refetchReview: Function = () => {}): { review(score: number, content: string, pokemonID: number, date: string, user: string): void; } {
  const [Review, { error, data }] = useMutation(REVIEW);
  useEffect(() => {
    if (error) {
      console.log(error)
    }

    if (!error && data?.NewReview?._id) {
      refetchReview();
    }
  }, [data, error, refetchReview]);
  return {
    review(score, content, pokemonID, date, user) {
      Review({ variables: { score, content, pokemonID, date, user } });
    },
  };
}