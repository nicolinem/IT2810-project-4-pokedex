import { useState } from "react";
import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }


  return (
    
    <View style={tw`flex mb-5 w-full flex-col text-center justify-center items-center text-white w-full`}>
        <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6}>
        <Text style={tw`text-white mt-5`}>
          {title}
        </Text>
      </TouchableOpacity>
      <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
        {content}
          </View>
          
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    height: 0,
      width: "100%"
  },
  list: {
      overflow: 'hidden',
      width: "100%"
  },
});
