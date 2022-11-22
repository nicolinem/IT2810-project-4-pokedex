import { Text, View } from "react-native";
import Comments from "./Comments";
import tw from 'twrnc';
import { NewReview } from "./NewReview";
import useProfile from "../../hooks/useProfile";


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
  const { status } = useProfile();
  

  return (

    <View style={tw``}>
      <View >
        {reviews.map((p) => (
          <Comments key={p._id} review={p}></Comments>
        ))}
      </View>
      {(status == 200) ? <NewReview refetchReviews={refetchReviews} />:
      <Text style={tw`text-center my-5`}> Sign in to leave a review</Text>}
    </View>
  );
};

export default Reviews;
