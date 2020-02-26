import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 
import Card from '../account/Card';
import Album from './Album';

import LinearGradient from 'react-native-linear-gradient';
import Fontinsto from 'react-native-vector-icons/Fontisto';

const screen = Dimensions.get("window");

class AccountScreen extends Component {

  state = {};

  render() {

    return (
      <ScrollView style={styles.container}>

        <View style={{ margin: 15, flex: 1 }}>
          <View style={styles.profile}>
            <Card />
          </View>

          <View style={{ flex: 1, marginTop: 30 }}>
            <Album />
          </View>

        </View>

      </ScrollView>
    );
  };
};

export default AccountScreen;