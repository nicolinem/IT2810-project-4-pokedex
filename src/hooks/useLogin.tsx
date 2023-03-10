import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
// import { isLoggedInVar } from "../cache";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useProfile from "./useProfile";

type Credentials = {
  email: string;
  password: string;
};

const LOGIN_QUERY = gql`
  mutation EmailPasswordLogin($email: String, $password: String) {
    Login(email: $email, password: $password)
  }
`;

export function useLogin() {
  const [Login, { data, error }] = useMutation(LOGIN_QUERY);
  const { refetch } = useProfile();

  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }

    if (data?.Login) {
      const _storeData = async () => {
        await AsyncStorage.setItem(
          'token',
          data.Login
        ).then(() => { refetch(), console.log("logged in") });
      }
      _storeData();
    }
  }, [data, refetch]);

  return {
    error,
    login: (credentials: Credentials) => {
      

      Login({ variables: { ...credentials } }).then((res) => {
        if (res.data?.Login) {
          refetch();
        }
      }
      )
    },
  };
}
