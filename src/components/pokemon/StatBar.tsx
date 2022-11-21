import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import tw from 'twrnc';

type Props = {
    stat: number,
    statName: string
    color: string
}
 
 
const StatBar = ({ stat, statName, color }: Props) => {

    let status = stat;
    if (stat > 100) {
        status = stat - 100;
    } 

    const styles = StyleSheet.create({
        progressBar: {
        width: `${status}%`,
        }
    });


    return (
        <View style={tw`w-3/4 mt-2`}>
            <Text style={tw`font-bold uppercase text-xs`} > {statName} </Text>
            {stat > 100 && 
            <View style={tw`h-4 mt-2 bg-[${color}] bg-opacity-30 rounded-full `}>
        </View>}
            
        <View style={tw`h-4 mt-2 bg-gray-200 rounded-full`}>
            <View style={styles.progressBar}>
                <View style={tw`bg-[${color}] bg-opacity-30 h-4 rounded-full w-full`} ></View>
            </View>
        
        </View>
    </View>
 );
}


 
export default StatBar;