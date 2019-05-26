// @flow
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { Home } from './screens/Home';

const { width, height } = Dimensions.get('window');

EStyleSheet.build({
   // Dimensions
   $window: {
      width,
      height,
   },
   $rem: width / 360, // 360 is device screen width in dev env
});

export default Home;
