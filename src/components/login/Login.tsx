import { useLogin } from "../../hooks/useLogin";
import tw from "twrnc"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LoginNavigationProp } from "../../types/navigation.types";
import useProfile from "../../hooks/useProfile";


export default function LoginPage() {
  const { login, error } = useLogin();
  const {status} = useProfile();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<LoginNavigationProp>();


  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }

  type Credentials = {
    email: string;
    password: string;
  };

    const handleSubmit = () => {

    const loginCredentials: Credentials = {
      email: username,
      password: password,
    };

      login(loginCredentials)
  };
    
  useEffect(() => {
    if (status === 200) {
      navigation.navigate("Home");
    }
  }, [status])  


   
 

  return (
      <View style={tw`absolute right-0 w-full h-full max-w-md p-4 md:h-auto`}>
          <View style={tw`relative bg-white rounded-lg shadow`}>

          <View style={tw`px-6 py-6`}>
            <Text style={tw`mb-4 text-xl font-medium text-gray-900 dark:text-white`}>
              Sign in to leave reviews
            </Text>
            
                    <>
                    <TextInput
                        style={styles.input}
                        value={username}
                        placeholder={"Username"}
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize={"none"}
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        placeholder={"Password"}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Pressable style={tw`mt-2 mx-auto text-center`} onPress={() => handleSubmit()} ><Text style={tw`m-auto text-center text-lg text-blue-800`}>Sign In</Text></Pressable>
                    </>
          <View style={tw`mt-5`}>
            <Pressable style={tw`m-auto text-center`} onPress={() => navigation.navigate('Signup')} ><Text style={tw`text-xs text-blue-800`} >Dont have an account? Sign up</Text></Pressable>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});


