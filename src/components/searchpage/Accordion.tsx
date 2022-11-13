import React, { useRef, useState } from "react";
import arrow from "../../../public/assets/arrow.png";
import tw from 'twrnc';
import { Text, TouchableOpacity, View } from "react-native";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }

  return (
    <View style={tw`flex flex-col my-10 text-center justify-center items-center text-white w-full`}>
       <TouchableOpacity onPress={() => toggleAccordion()}>
        <Text >
          {/* {type} */}
          hello
        </Text>
    
      </TouchableOpacity>
        {/* <View style={tw`text-center`}>{title}</View> */}
        {/* <img
          src={arrow}
          alt="arrow"
          height="13"
          width="13"
          color="white"
          className={`${rotate}`}
        ></img> */}
      <View
        ref={contentSpace}
        style={tw`overflow-auto w-full transition-max-height duration-700 ease-in-out max-h-${height}`}
 >
        <View style={tw`w-full`}>{content}</View>
      </View>
    </View>
  );
};
