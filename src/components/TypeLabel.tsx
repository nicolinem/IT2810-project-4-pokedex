import React from 'react'
import { Text, View } from 'react-native';
import { colorMapping } from '../types/types.utils';
import tw from 'twrnc';

type Props = {
    type: string
}


const TypeLabel = ({ type }: Props) => {
  
  const color = colorMapping[type.toLowerCase()];


  return (
    <View style={tw`bg-[${color}] py-1 px-4 rounded-full my-1 min-w-20 `}>
      <Text
        style={tw`text-white font-bold text-center capitalize`}
      
                >
              {type}
      </Text>
      </View>
  )
}



export default TypeLabel