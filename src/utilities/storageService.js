import AsyncStorage from '@react-native-community/async-storage';

const storageService = {
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  },
  getItem: async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
      }
      return value;
    } catch (e) {
      // error reading value
    }
  },
  removeItem: async key => {
    try {
      AsyncStorage.clear;
      const value = await AsyncStorage.removeItem(key);
      if (value !== null) {
        // value previously stored
      }
      return value;
    } catch (e) {
      // error reading value
    }
  },

  clear: () => {
    AsyncStorage.clear();
  },
};

export default storageService;
