// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { MyStatusBar } from '../../components/MyStatusBar';

function Home() {
   return (
      <View style={styles.container}>
         <MyStatusBar backgroundColor="transparent" barStyle="dark-content" />
         <Text>this is home</Text>
      </View>
   );
}

export default Home;
