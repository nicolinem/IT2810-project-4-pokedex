import AsyncStorage from '@react-native-async-storage/async-storage';

export const _storeData = async (token: string) => {
  try {
    await AsyncStorage.setItem(
      'token',
      token
    );
  } catch (error) {
    // Error saving data
  }
};


export const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};