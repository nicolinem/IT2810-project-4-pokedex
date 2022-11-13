import { useApolloClient } from "@apollo/client";
import { isLoggedInVar } from "../cache";
import useProfile from "./useProfile";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useSignout() {
  const { refetch } = useProfile();
  const client = useApolloClient();

  return {
    signout: () => {
      client.cache.evict({ fieldName: "me" });
      client.cache.gc();
      AsyncStorage.removeItem("token");
      isLoggedInVar(false);
      refetch();
    },
  };
}
