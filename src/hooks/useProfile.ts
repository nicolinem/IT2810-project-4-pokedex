import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          return
          console.log("value?", value);
        } else if (data?.Profile) {
          setProfile(data.Profile);
        } else if (profile != undefined && profile.name) {
          setProfile(profile);
        }
      } catch (error) {
        // Error retrieving data
      }
    };

    // setProfile((p) => {
      


    //   if (!localStorage.getItem("token")) {
    //     return;
    //   } else if (data?.Profile) {
    //     return data.Profile
    //   }
    //   else if (p !== undefined && p.name) {
    //     return p;
    //   } else return;
    // });
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
    // setStatus(() => {
      const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          setStatus(200)
        } else if (loading) setStatus(0);
         else setStatus(401);
      } catch (error) {
        // Error retrieving data
      }
    };
      // if (localStorage.getItem("token")) return 200;
      
     
    // });
  }, [data, profile, loading]);

  return { ...profile, status, refetch };
}
