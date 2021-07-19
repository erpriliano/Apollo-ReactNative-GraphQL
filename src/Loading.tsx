import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles, { PINK } from '../assets/styles';

const Loading: React.FC<{}> = () => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={PINK} />
    </View>
  );
};

export default Loading;
