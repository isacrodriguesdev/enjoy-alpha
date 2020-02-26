import React, { Component } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Fontinsto from 'react-native-vector-icons/Fontisto';

const user = {
  name: "Isac Rodrigues",
  photo: "https://lh3.googleusercontent.com/-KJKj2fQhw7I/Xi7W5oMzmTI/AAAAAAAAALY/AmKAHZgutnMOO3_wYhNAfl1rPWK1u_eswCEwYBhgL/w139-h140-p/WhatsApp-Image-2020-01-27-at-09.07.43.jpg",
}

const screen = Dimensions.get("window");

class Card extends Component {

  state = {
    cardHeight: 0
  };

  render() {

    return (
      <View style={styles.card} onLayout={(e) => {
        this.setState({ cardHeight: e.nativeEvent.layout.height })
      }}>

        <View style={[{ marginTop: 40, alignItems: "center" }]}>
          <Image source={{ uri: user.photo }} style={[styles.avatar,]} />

          <View style={{ marginTop: 10 }}>
            <Text style={styles.cardUserName}>{user.name}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", height: this.state.cardHeight / 2 }}>

          <View style={styles.iconCard}>
            <View style={{
              borderRadius: 100,
              backgroundColor: "white",
              padding: 13, alignItems: "center"
            }}>
              <Fontinsto name="player-settings" color="rgb(180,180,180)" size={26} />
            </View>
            <Text style={styles.iconCardText}>Configurações</Text>
          </View>
        </View>

      </View>
    );
  };
};

export default Card;