import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

type User = {
  _id: number
  name: string
};

const USER_QUERY = gql`
  {
    Profile {
      _id
      name
    }
  }
`;

export default function useProfile() {
  const { data, loading, refetch, error } = useQuery(USER_QUERY);

  
  const [profile, setProfile] = useState<User>({_id: 0, name: "" });
  const [status, setStatus] = useState(0);

  useEffect(() => {
    
    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }

    setProfile((p) => {
      if (!localStorage.getItem("token")) {
        return;
      } else if (data?.Profile) {
        return data.Profile
      }
      else if (p !== undefined && p.name) {
        return p;
      } else return;
    });
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
    setStatus(() => {
      if (localStorage.getItem("token")) return 200;
      else if (loading) return 0;
      else return 401;
    });
  }, [data, profile, loading]);

  return { ...profile, status, refetch };
}
