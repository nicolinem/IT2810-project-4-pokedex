import { useRoute } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import useProfile from "../../hooks/useProfile";
import { useReview } from "../../hooks/useReview";
import { PokemonScreenRouteProp } from "../../types/navigation.types";
import tw from "twrnc"
import { Rating } from "react-native-ratings";
import pokaball from "../../public/assets/halfpokeball.png"

type Props = {
  refetchReviews: () => void;
};

export const NewReview = ({ refetchReviews }: Props) => {
  const { review } = useReview(refetchReviews);
    const route = useRoute<PokemonScreenRouteProp>();
    const { id } = route.params;
    const {name} = useProfile();

   const [content, setContent] = useState<string>("");
   const [score, setScore] = useState<number>(0);
  

  const handleSubmit = () => {
    const date = new Date().toLocaleDateString();
    review(score, content, id, date, name);
    setContent("");
    setScore(0);
    refetchReviews();
    
  };

  return (
    <View style={tw`flex flex-col items-center justify-center p-6 mx-auto mt-10 bg-white rounded-lg shadow w-4/5`}>
          <Text style={tw`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`}>
            Leave a review
                  </Text>
                    <TextInput
                      multiline={true}
                      value={content}
        style={tw`bg-gray-200 text-gray-400 rounded-full w-2/3 min-h-7 pl-5 py-2 mt-2 w-full mb-2`} placeholder={"Review"} 
                      onChangeText={(value) => { setContent(value)}} 
      />
      
      <Rating
        type='custom'
        startingValue={score}
        ratingImage={pokaball}
        ratingColor='#e63946'
            ratingCount={5}
            imageSize={35}
            jumpValue={0.5}
            fractions={1}

            onFinishRating={(rating: number) => { setScore(rating)}}
/>
      <Pressable onPress={ handleSubmit} style={tw`bg-blue-500 py-2 px-4 mt-5 rounded-full`}>
        
      <Text style={tw`text-white font-bold`}>Submit</Text>
      
    </Pressable>
    </View>
  );
};