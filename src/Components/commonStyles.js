import dimensions from './dimensions';
import {Platform, StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#eee',
  },
  colorPrimary: {
    color: '#ff7f45',
  },
  colorWhite: {
    color: '#fff',
  },
  textColor: {
    color: '#464647',
    // color:'#777'
  },
  textDarkColor: {
    color: '#333',
  },
  lightDarkColor: {
    color: '#464647',
  },
  inputLogin: {
    height: dimensions.vw * 11,
  },
  textCenter: {
    textAlign: 'center',
  },
  hLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 10,
    backgroundColor: '#fff',
  },

  boxShadowIos: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 10,
    backgroundColor: '#fff',
  },
  whiteBg: {
    backgroundColor: '#fff',
  },
  whiteBG: {
    backgroundColor: '#fff',
  },
  carpoolCard: {
    marginBottom: 10,
    marginTop: 15,
    padding: 20,
    width: dimensions.vw * 100 - 40,
    marginLeft: 20,
    backgroundColor: '#efefef',
    borderRadius: 10,
    shadowColor: '#444',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 10,
  },
  carpoolInput: {
    height: dimensions.vw * 11,
    borderRadius: 10,
  },
  titleSize: {
    fontSize: 15,
  },
  carpoolButtom: {borderRadius: 10},
  textStyle: {
    color: '#464647',
    fontSize: dimensions.vw * 100 > 220 ? 14 : 13,
    fontFamily: Platform.OS === 'android' ? 'Nunito-Regular' : 'Nunito-Regular',
  },
  textBold: {
    fontFamily:
      Platform.OS === 'android' ? 'Nunito-SemiBold' : 'Nunito-SemiBold',

    // ? "Nunito-Bold"
    // : "Nunito-Bold",
    // fontWeight: "bold",
  },
  textBlack: {
    fontFamily: Platform.OS === 'android' ? 'Nunito-Bold' : 'Nunito-Bold',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: dimensions.vw * 100,
  },
  mainContainer: {
    width: dimensions.vw * 100,
    paddingHorizontal: dimensions.vw * 5,
  },
});

export default commonStyles;
