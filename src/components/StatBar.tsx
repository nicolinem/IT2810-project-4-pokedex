import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import tw from 'twrnc';

type Props = {
    stat: number,
    statName: string
}
 
 
const StatBar = ({ stat, statName }: Props) => {

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
        <View style={tw`w-2/3 mx-auto mt-2`}>
            <Text> {statName} </Text>
            {stat > 100 && 
            <View style={tw`h-4 mt-2 bg-blue-600 rounded-full h-2.5`}>
        </View>}
            
        <View style={tw`h-4 mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}>
            <View style={styles.progressBar}>
                <View style={tw`bg-blue-600 h-2.5 rounded-full w-full`} ></View>
            </View>
        
        </View>
    </View>
 );
}


 
export default StatBar;