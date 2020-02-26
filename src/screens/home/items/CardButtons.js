import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontinsto from 'react-native-vector-icons/Fontisto';

export default function (props) {

  return (
    <View style={styles.card.cardButtons}>

      <TouchableOpacity style={[styles.card.cardButton, { backgroundColor: "white", padding: 7 }]}>
        <View style={{ width: 35, height: 35, justifyContent: "center", alignItems: "center" }}>
          <MaterialIcon name="close" size={32} color="rgb(150,150,150)" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card.cardButton, { backgroundColor: "#4dce93", padding: 15 }]}>
        <FontAwesome name="heart" size={35} color="white" style={{ top: 2 }} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card.cardButton, { backgroundColor: "white", padding: 7 }]}>
        <View style={{ width: 35, height: 35, justifyContent: "center", alignItems: "center" }}>
          <Fontinsto name="fire" size={22} color="rgb(255, 50, 105)" />
        </View>
      </TouchableOpacity>

      {props.children}

    </View>
  );
}