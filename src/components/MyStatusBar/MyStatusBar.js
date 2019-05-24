// @flow

import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';

type Props = {
   height?: number,
   backgroundColor: string,
};

function MyStatusBar({ backgroundColor, height, ...props }: Props) {
   MyStatusBar.defaultProps = {
      height: 20,
   };

   return (
      <>
         {Platform.OS === 'ios' ? (
            <View style={{ backgroundColor, width: '100%', height }} />
         ) : (
            <StatusBar backgroundColor={backgroundColor} {...props} />
         )}
      </>
   );
}

export default MyStatusBar;
