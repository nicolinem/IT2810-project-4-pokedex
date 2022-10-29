import { useApolloClient } from "@apollo/client";
import { isLoggedInVar } from "../../cache";
import useProfile from "./useProfile";

export function useSignout() {
  const { refetch } = useProfile();
  const client = useApolloClient();

  return {
    signout: () => {
      client.cache.evict({ fieldName: "me" });
      client.cache.gc();
      localStorage.removeItem("token");
      isLoggedInVar(false);
      refetch();
    },
  };
}
