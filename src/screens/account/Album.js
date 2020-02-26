import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native';
// # styles
import styles from './styles';
// # types
// # imports
// # services
// # utils
// # actions
// # components 
import LinearGradient from 'react-native-linear-gradient';
import Fontinsto from 'react-native-vector-icons/Fontisto';


const album = ["https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/p960x960/83377161_1476267499251138_8637180683954946048_o.jpg?_nc_cat=110&_nc_ohc=--4XwFAS5Q4AX9VH4Gq&_nc_ht=scontent.fgyn11-1.fna&_nc_tp=6&oh=45b2df187b5688f3fc095b598264a038&oe=5EC4AC01", "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/s960x960/83359800_1474690772742144_8173314161468506112_o.jpg?_nc_cat=103&_nc_ohc=Vv1iUgNlsycAX-tH8HT&_nc_ht=scontent.fgyn11-1.fna&oh=8fdc8a012d999afc48c815f7be73a350&oe=5ECDDDD1", "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/83401580_1474688126075742_7123562512955473920_n.jpg?_nc_cat=106&_nc_ohc=JL0IxilA2joAX_6St8g&_nc_ht=scontent.fgyn11-1.fna&oh=eefc32b04b36d6d77f194f9a566891ff&oe=5ED2DD4A", "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/p720x720/83422927_1474688136075741_2355545865411624960_o.jpg?_nc_cat=105&_nc_ohc=pe5jL3iEUzkAX9khGNf&_nc_ht=scontent.fgyn11-1.fna&_nc_tp=6&oh=18f8955f8af197715ff5149e63ff77fc&oe=5ED1A1E8"]

const screen = Dimensions.get("window");

class Album extends Component {

  state = {
    photoWidth: 0
  };

  mountPhotos() {

    const photos = [];

    for(let i = 0; i < 6; i++) {

      photos.push(
        <TouchableWithoutFeedback key={Math.random().toString()}>
          <Image source={{ uri: album[i] }}
            style={{ width: (this.state.photoWidth / 3) - 12, height: (screen.width / 2) - 6, marginHorizontal: 6, marginVertical: 6, borderRadius: 7 }}
            resizeMode="cover" />
        </TouchableWithoutFeedback>
      );
    }

    return photos;
  }

  render() {

    return (
      <View style={{
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
      }}>
        {/* <Text style={[styles.infoText, { padding: 5, fontSize: 16, fontWeight: "bold" }]}>
          Adicionar fotos
          </Text> */}
        <View style={{
          flexDirection: "row",
          flexWrap: "wrap"
        }} onLayout={(event) => {
          this.setState({ photoWidth: event.nativeEvent.layout.width })
        }}>
          { this.mountPhotos() }
        </View>

        <TouchableOpacity style={{ alignItems: "center", marginTop: 30 }}>
          <LinearGradient colors={['#e91722', '#c72689']}
            start={{ x: 0.1, y: 0.4 }} end={{ x: 1, y: 1 }}
            style={styles.buttonConnectInstagram}>
            <Fontinsto name="instagram" color="white" size={20} />
            <Text style={styles.buttonConnectInstagramText}>Conectar Instagram</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
};

export default Album;