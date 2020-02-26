import React, { useState } from 'react';
import { View, Text } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 

export default function (props) {

  return (
    <View style={[styles.message, { backgroundColor: "#660066" }]}>
      <Text style={styles.messageText}>{props.message}</Text>
    </View>
  );
}