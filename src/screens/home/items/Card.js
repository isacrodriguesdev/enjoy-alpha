import React from 'react';
import { View, Animated, Text, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
// # styles
import styles from './styles';
// # imports
// # services
// # utils
// # actions
// # components 
import CardButtons from './CardButtons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontinsto from 'react-native-vector-icons/Fontisto';

export default function (props) {

  return (
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("Profile")}>
      <ImageBackground style={[styles.card.cardBackground]} source={{ uri: props.photo }} imageStyle={{ borderRadius: 7, resizeMode: "cover" }}
      >

        <View style={styles.card.about}>
          <Text style={styles.card.aboutName}>
            {props.name},
                <Text style={styles.card.aboutAge}>
              {" " + props.age}
            </Text>
          </Text>
          <Text style={styles.card.aboutLocation}>
            {props.city}
          </Text>
        </View>

        <CardButtons />

      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};