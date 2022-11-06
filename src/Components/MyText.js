import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import colors from '../utilities/colors';
import dimensions from '../utilities/dimensions';
// import EStyleSheet from 'react-native-extended-stylesheet';

const MyText = props => {
  return Platform.OS === 'android' ? (
    <Text
      numberOfLines={props.numberOfLines}
      style={[
        {
          ...styles.textStyle,
          ...(props.primary ? styles.textPrimary : {}),
          ...(props.secondary ? styles.textSecondary : {}),
          ...(props.center ? styles.textCenter : {}),
          ...(props.dark ? styles.textDark : {}),
          ...(props.light ? styles.textLight : {}),
          ...(props.bold ? styles.textBold : {}),
          ...(props.black ? styles.textBlack : {}),
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  ) : (
    <View style={[styles.viewStyle, props.primary ? styles.textPrimary : {}]}>
      <Text
        numberOfLines={props.numberOfLines}
        style={[
          {
            ...styles.textStyle,
            ...(props.primary ? styles.textPrimary : {}),
            ...(props.secondary ? styles.textSecondary : {}),
            ...(props.center ? styles.textCenter : {}),
            ...(props.dark ? styles.textDark : {}),
            ...(props.bold ? styles.textBold : {}),
            ...(props.black ? styles.textBlack : {}),
          },
          props.style,
        ]}
      >
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: colors.textColor,
    fontSize: dimensions.vw * 100 > 220 ? 14 : 13,
    // fontFamily:
    //   Platform.OS === 'android'
    //     ? 'AvenirNextLTPro-Regular'
    //     : 'AvenirNextLTPro-Regular',
    fontWeight: '400',
  },
  textBold: {
    // fontFamily:
    //   Platform.OS === 'android'
    //     ? 'AvenirNextLTPro-Demi'
    //     : 'AvenirNextLTPro-Demi',

    // ? "AvenirNextLTPro-Bold"
    // : "AvenirNextLTPro-Bold",
    // fontWeight: "bold",
    fontWeight: '800',
  },
  textBlack: {
    // fontFamily:
    //   Platform.OS === 'android'
    //     ? 'AvenirNextLTPro-Bold'
    //     : 'AvenirNextLTPro-Bold',
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.primaryColor,
  },
  textSecondary: {
    color: colors.secondaryColor,
  },
  textDark: {
    color: colors.textColor,
  },
  textLight: {
    color: colors.whiteColor,
  },
  textCenter: {
    textAlign: 'center',
  },
  viewStyle: {
    marginTop: 3,
  },
});

export default MyText;
