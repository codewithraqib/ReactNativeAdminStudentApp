import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilState} from 'recoil';
import MyButton from '../../Components/MyButton';
import {shippingState} from '../../Recoil/atoms';
import dimensions from '../../utilities/dimensions';

const ChatDetailsScreen = props => {
  const [shopingItems, setShopingItems] = useRecoilState(shippingState);

  console.log({props});

  const gotoScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{}}>
        <View style={styles.buttonContaier}>
          <MyButton
            name={'Student List'}
            onPress={() => gotoScreen('StudentList')}
          />
        </View>

        <View style={styles.buttonContaier}>
          <MyButton
            name={'Student Chat'}
            onPress={() => console.log('Pressed in Parent')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  buttonContaier: {
    marginVertical: dimensions.vh * 2,
  },
});

export default ChatDetailsScreen;
