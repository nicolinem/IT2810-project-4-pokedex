import { useState } from "react";
import { FlatList, View } from "react-native";
import TypeButton from "./TypeButton";
import tw from 'twrnc';
import { types } from "../../utils/constants";

type props = {
  getActiveTypes: (activeTypes: string[]) => void;
};

export const TypeButtonContainer: React.FC<props> = ({ getActiveTypes }) => {
  const [activeTypes, setactiveTypes] = useState<string[]>([]);



  const activateButton = (type: string): void => {
    var currentTypes: string[] = activeTypes;

    if (currentTypes.includes(type)) {
      const index = currentTypes.indexOf(type);
      currentTypes.splice(index, 1);
      setactiveTypes(currentTypes);
    } else {
      currentTypes.push(type);
      setactiveTypes(currentTypes);
    }

    getActiveTypes(activeTypes);
  };


  return (
    <View style={tw`min-w-3/4 mx-auto mt-5`}>
     <FlatList
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        numColumns={3}
        data={types}
        renderItem={({ item }) => <TypeButton type={item} activateButton={() => activateButton(item)}></TypeButton>} /> 

    </View>
  );
};
