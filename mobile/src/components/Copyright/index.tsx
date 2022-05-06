import React from 'react';
import { View, Text} from 'react-native';
import { styles } from './styles';

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text>
        Feito com ♥️ pela Rocketseat
      </Text>
    </View>
  );
}