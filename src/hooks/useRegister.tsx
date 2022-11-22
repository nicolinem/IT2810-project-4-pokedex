import { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import useProfile from './useProfile';
// import { isLoggedInVar } from '../cache';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


type Credentials = {
    password: string
    name: string
    email: string
}

const REGISTER_QUERY = gql`
  mutation (
    $email: String
    $password: String
    $name: String
  ) {
    Signup(
      email: $email
      password: $password
      name: $name
    )
  }
`;

export function useRegister() {
  const [Register, { data, error }] = useMutation(REGISTER_QUERY);
  const { refetch } = useProfile();
 
  

  useEffect(() => {
    if (data?.Signup) {
      const _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'token',
            data.Signup
          ).then(() => {
            refetch();
            // isLoggedInVar(true);
          });
        } catch (error) {
          Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        )
        }
      }
     _storeData();
      refetch();
    }
    

  }, [data, refetch]);

  return {
    error,
    register: (credentials: Credentials) => {
      Register({ variables: { ...credentials } });
      }
    }
    
  };