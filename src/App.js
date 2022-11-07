/**
 *
 * Sample React Native App with Reecoil State Magement
 * https://github.com/facebook/react-native
 * https://github.com/raqib850
 * author Raqib <codewithraqib@gmail.com>
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentList from './Screens/StudentList/StudentList';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import ChatDetailsScreen from './Screens/ChatDetailsScreen/ChatDetailsScreen';
import ChatListScreen from './Screens/ChatListScreen/ChatListScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <RecoilRoot>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            contentStyle: {
              backgroundColor: '#eee',
            },
          }}
        >
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={'someData'} />}
          </Stack.Screen>
          <Stack.Screen name="Student List">
            {props => <StudentList {...props} extraData={'someData'} />}
          </Stack.Screen>
          <Stack.Screen name="Profile">
            {props => <ProfileScreen {...props} extraData={'someData'} />}
          </Stack.Screen>
          <Stack.Screen name="Chat Details">
            {props => <ChatDetailsScreen {...props} extraData={'someData'} />}
          </Stack.Screen>

          <Stack.Screen name="Chat List">
            {props => <ChatListScreen {...props} extraData={'someData'} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({});

export default App;
