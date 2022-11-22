import { useLogin } from "../../hooks/useLogin";
import tw from "twrnc"
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { useNavigation } from "@react-navigation/native";
import { CardNavigationProp } from "../../types/navigation.types";
import useProfile from "../../hooks/useProfile";
import { StackActions } from '@react-navigation/native';


export default function RegistrationPage() {
  const { register } = useRegister();
    const {status} = useProfile();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation<CardNavigationProp>();


   type Credentials = {
    password: string;
    email: string;
    name: string;
  };

  const handleSubmit = () => {
      
    if (!username || !password || !name) {
    return Alert.alert("Please enter all fields");
    }

    const credentials: Credentials = {
      email: username,
        password: password,
        name: name
    };
      register(credentials)
  };
    

  useEffect(() => {
    if (status === 200) {
    console.log("statusupdate")
    navigation.dispatch(StackActions.popToTop());
    }
  }, [status])

  return (
      <View style={tw`absolute right-0 w-full h-full max-w-md p-4 md:h-auto`}>
          <View style={tw`relative bg-white rounded-lg shadow dark:bg-gray-700`}>

          <View style={tw`px-6 py-6 lg:px-8`}>
            <Text style={tw`mb-4 text-xl font-medium text-gray-900 dark:text-white`}>
              Sign un to leave reviews
            </Text>
            
                    <>
                    <TextInput
                        style={styles.input}
                        value={name}
                        placeholder={"Username"}
                        onChangeText={(text) => setName(text)}
                        autoCapitalize={"none"}
                    />
                    <TextInput
                        style={styles.input}
                        value={username}
                        placeholder={"Email"}
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
            <Button title={"Sign Up"} onPress={() => handleSubmit()} />
                    </>
            <View style={tw`mt-5`}>
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