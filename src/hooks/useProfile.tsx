import { useState, useEffect} from 'react';
import { gql, useQuery } from '@apollo/client';


type User = {
    _id: number,
    name: string
}

const USER_QUERY = gql`
  {
    Profile {
      _id
      name 
    }
  }
`;

export default function useProfile() {
    const { data, loading, refetch } = useQuery(USER_QUERY);
    const [profile, setProfile] = useState<User>();
    const [status, setStatus] = useState(0);
    
    useEffect(() => {
    setProfile(p => {
      if (!localStorage.getItem('token')) {
          return {}
        }
      else if (data?.Profile) return data.Profile;
      else if (p != undefined && p._id) {
          return p;
      } 
      else return {};
    });
    
  }, [data]);
    
  
    useEffect(() => {
    setStatus(() => {
      if (localStorage.getItem('token')) return 200;
      else if (loading) return 0;
      else return 401;
    });
  }, [data, profile, loading]);

    
  return { ...profile, status, refetch };
}