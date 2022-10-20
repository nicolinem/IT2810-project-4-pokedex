

import { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import useProfile from './useProfile';
import {isLoggedInVar} from '../cache';

type Credentials = {
    password: string
    email: string
}


const LOGIN_QUERY = gql`
  query EmailPasswordLogin($email: String, $password: String) {
    Login(email: $email, password: $password)
  }
`;

export function useLogin() {
    const [Login, { data, error }] = useLazyQuery(LOGIN_QUERY);
    console.log(Login)
    console.log(error)
  const { refetch } = useProfile();

  useEffect(() => {
    if (data?.Login) {
      localStorage.setItem('token', data.Login);
      isLoggedInVar(true);
      refetch();
    }
  }, [data, refetch]);

  return {
    error,
    login: (credentials: Credentials) => Login({ variables: credentials }),
  };
}