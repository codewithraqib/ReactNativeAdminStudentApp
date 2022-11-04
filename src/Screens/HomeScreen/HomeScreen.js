import React from 'react';

import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Text>Helo i am homescreen</Text>
    </View>
  );
};

export default HomeScreen;
