import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Fontinsto from 'react-native-vector-icons/Fontisto'
import CardButtons from '../home/items/CardButtons';

const user = {
  name: "",
  photo: "",
  age: 20,
  state: "GO",
  city: "Gôiania",
  sector: "São Domingos",
  distance: 3,
  description: "Oii, eu sou um tipo de pessoa alegre, gosto de estudar tecnologias, ciências e diversas coisas, minha paixão é desenvolver sistemas sou programador não trabalho na área ainda, eu não gosto de funk nem de certanejo, não gosto de sair para lugares cheios de pessoas, sou mais tranquilo, reservado",
  album: [
    
  ]
}

const screen = Dimensions.get("window");

class ProfileScreen extends Component {

  state = {
    photoWidth: 0,
  };

  render() {

    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.album}>
            <ImageBackground source={{ uri: user.photo }} style={styles.photo}>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Tab")}>
                <Fontinsto name="arrow-return-left" style={{
                  color: "rgba(255,255,255,0.99)",
                  padding: 15, fontSize: 25,
                  textShadowColor: 'rgba(0, 0, 0, 0.7)',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 5
                }} />
              </TouchableWithoutFeedback>
            </ImageBackground>
          </View>

          <View style={styles.info}>

            <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(0,0,0,0.07)", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 }}>

              <Text style={[styles.name]}>{user.name}</Text>

              <TouchableWithoutFeedback>
                <SimpleLineIcon name="star" size={24} color="rgb(140,140,145)" style={{ marginRight: 20 }} />
              </TouchableWithoutFeedback>
            </View>

            <View style={[styles.infoTextContainer, { backgroundColor: "none", borderRadius: 2 }, styles.space]}>
              <Text style={styles.infoText}>{user.description}</Text>
            </View>

            <View style={styles.space}>
              <View style={styles.infoTitleContainer}>
                <Fontinsto name="periscope" style={{ color: "white", fontSize: 16, marginRight: 7 }} />
                <Text style={styles.infoTitleText}>Localização</Text>
              </View>

              <View style={styles.infoTextContainer}>
                <Text style={styles.infoText}>
                  {`${user.city}, ${user.state} - ${user.sector}`}
                </Text>
                <Text style={styles.infoText}>
                  {user.distance + " km de distância de você"}
                </Text>
              </View>
            </View>

            <View style={{}}>
              <Text style={[styles.infoText, { padding: 5, fontSize: 16, fontWeight: "bold" }]}>
                Mais fotos
              </Text>
              <View style={{
                flexDirection: "row",
                flexWrap: "wrap"
              }} onLayout={(event) => {
                this.setState({ photoWidth: event.nativeEvent.layout.width })
              }}>
                {
                  user.album.map((uri, index) => {
                    return (
                      <TouchableWithoutFeedback key={index.toString()}>
                        <Image source={{ uri }}
                          style={{ width: (this.state.photoWidth / 3) - 6, height: (screen.width / 3) - 6, marginHorizontal: 3, marginVertical: 3, borderRadius: 4 }}
                          resizeMode="cover" />
                      </TouchableWithoutFeedback>
                    );
                  })
                }
              </View>
            </View>

          </View>

        </ScrollView>

        <View style={{
          position: "absolute",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%", width: "100%"
        }}>
          <CardButtons />
        </View>
      </>
    );
  };
};

export default ProfileScreen;