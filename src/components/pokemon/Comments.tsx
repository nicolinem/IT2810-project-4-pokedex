import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Text, View } from "react-native";
// import { StyledRating } from "./RatingComponent";
import tw from "twrnc";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SetStateAction, useState } from "react";
import pokaball from "../../public/assets/halfpokeball.png"


type Review = {
    _id: number
    content: string
    score: number
    date: string
    user: string
}

type Props = {
  review: Review
}

const Comments = (props: Props) => {
  const [ratings, setRatings] = useState<number>(0);

  return (
    <View style={tw`flex items-center flex-1 justify-center m-3`}>
        
      <View style={tw`w-7/8 px-10 py-4 bg-white rounded-xl `}>
      
        <View style={tw`flex justify-between flex-row`}>
          <Text style={tw`text-lg font-semibold text-gray-700`}>{props.review.user}</Text>
          
 
          <Rating
            startingValue={props.review.score}
            type='custom'
            ratingCount={5}
            ratingImage={pokaball}
            imageSize={20}
            readonly={true}
            ratingColor='#e63946'
            ratingBackgroundColor='#edede9'
/>
          
          </View>
          


        <View style={tw`flex-1 w-full justify-between`}>
          <Text style={tw`mt-4  text-md`}> {props.review.content}</Text>
                <Text style={tw`flex mt-4 text-gray-600 text-sm`}>{"Posted " + props.review.date}</Text>
          </View> 
            </View>
        </View>
  );
};

export default Comments;
