import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utilities/colors';
import dimensions from '../utilities/dimensions';
import MyText from './MyText';
import MyTouchable from './MyTouchable';

const MyButton = props => {
  return (
    <MyTouchable onPress={() => props.onPress()}>
      <View style={styles.mainView}>
        <MyText style={styles.nameStyle}>{props.name}</MyText>
      </View>
    </MyTouchable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.vw * 11,
    backgroundColor: `${colors.primaryColor}`,
    borderRadius: 4,
    width: '100%',
  },
  nameStyle: {
    color: `${colors.whiteColor}`,
    fontSize: 14,
  },
});

export default MyButton;
