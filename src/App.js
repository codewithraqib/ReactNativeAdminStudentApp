/**
 *
 * Sample React Native App with Reecoil State Magement
 * https://github.com/facebook/react-native
 * author Raqib <codewithraqib@gmail.com>
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {enableScreens} from 'react-native-screens';

// enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RecoilRoot>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={'someData'} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({});

export default App;
