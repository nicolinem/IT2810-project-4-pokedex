import { useState } from "react";
import { FlatList, View } from "react-native";
import TypeButton from "./TypeButton";
import tw from 'twrnc';

type props = {
  getActiveTypes: (activeTypes: string[]) => void;
};

export const TypeButtonContainer: React.FC<props> = ({ getActiveTypes }) => {
  const [activeTypes, setactiveTypes] = useState<string[]>([]);

  const types: string[] = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
    "grass",
  ];

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

  // const typeButtons = (types: string[]) => {
  //   return types.map((type: string) => (
      
  //   ));
  // };

  return (
    <View style={tw`w-2/3 mx-auto mt-5`}>
     <FlatList
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        numColumns={3}
        data={types}
        renderItem={({ item }) => <TypeButton type={item} activateButton={() => activateButton(item)}></TypeButton>} /> 

    </View>
  );
};
