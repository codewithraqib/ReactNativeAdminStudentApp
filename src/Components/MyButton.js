import * as React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import colors from '../utilities/colors';
import dimensions from '../utilities/dimensions';

const MyButton = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={styles.mainView}>
        <Text style={styles.nameStyle}>{props.name}</Text>
      </View>
    </TouchableOpacity>
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
