// @flow

import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

type Props = {
   size?: number,
   source: number,
   onPress: Function,
   style: Object,
};

function IconButton({
   size, source, onPress, style,
}: Props) {
   IconButton.defaultProps = {
      size: 20,
   };

   return (
      <TouchableOpacity style={{ width: size, height: size, ...style }} onPress={onPress}>
         <Image source={source} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
   );
}

export default IconButton;
