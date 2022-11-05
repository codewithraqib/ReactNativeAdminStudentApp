import React from 'react';
import {View, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {shippingState} from '../../Recoil/atoms';

const HomeScreen = () => {
  const [shopingItems, setShopingItems] = useRecoilState(shippingState);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Text>{shopingItems[0].name}</Text>
    </View>
  );
};

export default HomeScreen;
