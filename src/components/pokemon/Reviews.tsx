import { View } from "react-native";
import Comments from "./Comments";
import tw from 'twrnc';
import { NewReview } from "./NewReview";


type Review = {
  _id: number;
  content: string;
  score: number;
  date: string;
  user: string;
};

type Props = {
  reviews: [Review];
  refetchReviews: () => void;
};

const Reviews = ({ reviews, refetchReviews }: Props) => {
  return (
    <View style={tw``}>
      <View >
        {reviews.map((p) => (
          <Comments  review={p}></Comments>
        ))}
      </View>
      <NewReview refetchReviews={refetchReviews}></NewReview>
    </View>
  );
};

export default Reviews;
