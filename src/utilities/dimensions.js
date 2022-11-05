import {Dimensions} from 'react-native';

const win = Dimensions.get('window');

const dimensions = {
  vw: win.width / 100,
  vh: win.height / 100,
};

export default dimensions;
