import { useState } from "react";
import { Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
const arrot = require('../../public/assets/arrow.png')
const arrowup = require('../../public/assets/arrowup.png')

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState(arrot);




  const toggleOpen = () => {
    setActive((prevState) => !prevState);
    setIsOpen(value => !value);
     setSource(
      active
        ? arrot
        : arrowup
    );
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   
  }

  return (
    
    <View style={tw`my-3`}>
        <TouchableOpacity style={tw`flex w-full flex-col text-center justify-center items-center text-white w-full`} onPress={toggleOpen} activeOpacity={0.6}>
        <Text style={tw`text-white`}>
          {title}
        </Text>
       
      </TouchableOpacity>
      <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
        {content}
      </View>
      
      <TouchableOpacity style={tw`flex w-full flex-col text-center justify-center items-center text-white w-full`} onPress={toggleOpen} activeOpacity={0.6}>
           <Image
            style={tw`w-3 h-3`}
            source={source}
          />
       
      </TouchableOpacity>
           
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
