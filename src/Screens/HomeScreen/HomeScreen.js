import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BGCarpoolInnerBottom from '../../Components/BGCarpoolInnerBottom';
import MyButton from '../../Components/MyButton';
import dimensions from '../../utilities/dimensions';

const HomeScreen = props => {
  console.log({props});

  const gotoScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <BGCarpoolInnerBottom />
      <View style={{}}>
        <View style={styles.buttonContaier}>
          <MyButton
            name={'Student List'}
            onPress={() => gotoScreen('Student List')}
          />
        </View>

        <View style={styles.buttonContaier}>
          <MyButton
            name={'Chat List'}
            onPress={() => gotoScreen('Chat List')}
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
    height: '80%',
    alignItems: 'center',
  },
  buttonContaier: {
    marginVertical: dimensions.vh * 4,
  },
});

export default HomeScreen;
