import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { matchTypeColor } from "../../types/pokemon.utils";
import tw from 'twrnc';
import { colorMapping } from "../../types/types.utils";

type Props = {
  type: string;
  activateButton: (type: string) => void;
};

const TypeButton: React.FC<Props> = ({ type, activateButton }) => {
  const [switchState, setSwitchState] = useState(false);
  const [styling, setStyling] = useState({...styles.typeText});

  const handleOnChange = () => {
    const state = switchState;

    setSwitchState(!state);
    activateButton(type);

    if (!state) {
      setStyling(
        {...styles.typeText, ...styles.activeChip}
      );
    } else {
      setStyling(
        {...styles.typeText}
      );
    }
  };

  return (
    <TouchableOpacity onPress={() => handleOnChange()}>
        <Text style={{
                ...styling,
        backgroundColor: colorMapping[type],
                
              }}>
              {type}
        </Text>
    
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
 
  typeText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 'auto',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    borderRadius: 12,
    color: 'white',
    textTransform: 'capitalize',
    overflow: "hidden",
    minWidth: 70,
    borderWidth: 2,
    borderColor: "#121A36",
  }, activeChip: {
    borderWidth: 2,
    borderColor: 'white',
  }
});

            
export default TypeButton;
