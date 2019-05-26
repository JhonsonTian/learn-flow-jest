// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import { MyStatusBar } from '../../components/MyStatusBar';
import { IconButton } from '../../components/IconButton';

const STATUS = 'online';
const CONNECTED_TO = 'FIDOHotspot';

function Home() {
   return (
      <View style={styles.container}>
         <MyStatusBar backgroundColor="transparent" barStyle="dark-content" />
         <IconButton
            source={images.menuIcon}
            size={25 * styles.$size}
            style={styles.menuIcon}
            onPress={() => null}
         />
      </View>
   );
}

export default Home;
