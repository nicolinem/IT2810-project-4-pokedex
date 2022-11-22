import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native'
import tw from 'twrnc'
import useProfile from '../../hooks/useProfile';
import { useSignout } from '../../hooks/useSignOut';
import {  LoginNavigationProp } from '../../types/navigation.types';


  
const LoginButton = () => {
    const navigation = useNavigation<LoginNavigationProp>();
    const [auth, setAuth] = useState(false);
    const { signout } = useSignout();
    const { status } = useProfile();
    
      
    useEffect(() => {
           
    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
            setAuth(true)
            } else {
            setAuth(false)
            }
        } catch (error) {
            console.log(error)
        }
            };
           
      _retrieveData();
       }, [status]);
      
  return (
    <>
         {
          (!auth) ?
             <View style={tw`absolute right-2 z-10`}>
               <Button
              onPress={() => navigation.navigate('Login')}
              title="Sign in"
              color="#fff"
            />
          </View> :
          <View style={tw`absolute right-2 z-10`}>
               <Button
              onPress={() => signout()}
              title="Sign out"
              color="#fff"
            />
          </View>
        }
           </>
  )
}

export default LoginButton