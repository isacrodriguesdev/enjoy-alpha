import React, { Component } from 'react';
import { View, TouchableOpacity, ImageBackground, Text, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
// # styles
import styles from './styles';
// # types
import { NavigationScreenProp } from 'react-navigation';
// # imports
// # services
// # utils
// # actions
// # components 
import Card from './items/Card';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Fontinsto from 'react-native-vector-icons/Fontisto';

import { PanGestureHandler, State, PanGestureHandlerStateChangeEvent as onStateChange } from 'react-native-gesture-handler';

const users = [
  {
    name: "Raquel Neves",
    photo: "https://conteudo.imguol.com.br/c/bol/entretenimento/16/2019/01/20/savanna-rehm-1548021565835_v2_1080x1350.jpg",
    age: 24,
    city: "Gôiania"
  },
  {
    name: "Fernanda",
    photo: "https://www.gatasdocerrado.com.br/wp-content/uploads/2019/05/Jessica-Souto-Gatas-do-Cerrado.jpg",
    age: 27,
    city: "Gôiania"
  },
  {
    name: "Amanda Oliveira",
    photo: "https://www.gatasdocerrado.com.br/wp-content/uploads/2019/06/Gatas-do-Cerado-Mariana-Nunes-6.jpg",
    age: 19,
    city: 'Gôiania'
  },
  {
    name: "Aline",
    photo: "https://i2.wp.com/jetsetters.com.br/wp-content/uploads/2017/12/WhatsApp-Image-2017-12-23-at-17.58.34.jpeg?resize=1024%2C1280",
    age: 28,
    city: "Gôiania"
  },
]

const screen = Dimensions.get("window");

class HomeScreen extends Component {

  state = {
    index: 0,
    profiles: [],
    offset: 0,
    total: 0
  }

  // posição do cartão
  translateX = new Animated.Value(0);

  // juntando duas animações
  // uma animaçõe depende da outra
  rotateZ = Animated.concat(
    Animated.interpolate(this.translateX, {
      inputRange: [-120, 0, 120],
      outputRange: [-0.24, 0, 0.24],
      extrapolate: Animated.Extrapolate.CLAMP
    })
  );

  // evento que alterar o a posição do componente
  animatedEvent = Animated.event([
    {
      nativeEvent: {
        translationX: this.translateX,
        velocityX: 0
      }
    },
    // usando animação nativa do Java
  ], { useNativeDriver: true });


  componentDidMount() {

    const profiles = [];

    users.forEach((user, index) => {

      profiles.push(
        <View style={styles.card} key={index.toString()}>
          <Card {...user} />
        </View>
      )
    });

    this.setState({ profiles });
    this.translateX.setValue(0);
  }
  // verificar se a animação terminou e fazer algo 
  async onChangeState(e) {

    let { translationX, oldState } = e.nativeEvent;

    if (oldState === State.ACTIVE) {

      if (Math.abs(translationX) >= 70) {

        this.translateX.setValue(0);
        await this.setState({ index: this.state.index + 1 });
        await this.setState({ total: ((screen.width / 2) / this.state.profiles.length) * this.state.index })

        if (this.state.index == this.state.profiles.length - 1)
          this.setState({ index: 0, total: 0 })

      } else {

        Animated.spring(this.translateX, {
          toValue: 0,
          stiffness: 350,
          restSpeedThreshold: 10,
          restDisplacementThreshold: 0.5,
          mass: 2,
          damping: 50,
          useNativeDriver: true
        }).start();
      }
    }
  }

  transformCard = {
    transform: [
      {
        translateX: this.translateX.interpolate({
          inputRange: [-120, 0, 120],
          outputRange: [-screen.width / 1.2, 0, screen.width / 1.2],
          extrapolate: Animated.Extrapolate.CLAMP
        })
      },
      {
        rotateZ: this.rotateZ
      }
    ]
  }

  render() {

    //const { navigate } = this.props.navigation;

    return (
      <>

        <View style={styles.header}>

          {/* <View>
            <Text style={{
              fontSize: 18, fontWeight: "bold", color: "#8080ff",
            }}>Enjoy</Text>
          </View> */}

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            {/* <TouchableOpacity style={{ marginRight: 20 }}>
              <Fontinsto name="equalizer" size={21} color="rgba(80,80,120,0.5)" style={{ transform: [{ rotate: '90deg' }] }} />
            </TouchableOpacity> */}

            <TouchableOpacity>
              <Fontinsto name="hipchat" size={25} color="rgba(80,80,120,0.5)" style={{ marginRight: 0 }} />
            </TouchableOpacity>

            <View>
              <Text style={{
                fontSize: 18, fontWeight: "bold", color: "rgb(83, 0, 130)",
              }}>Enjoy</Text>
            </View>

            <TouchableOpacity>
              <FontAwesome name="user-circle" size={25} color="rgba(80,80,120,0.5)" />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.container}>

          <View style={styles.cards}>

            {this.state.profiles[this.state.index + 1]}

            <PanGestureHandler
              onGestureEvent={this.animatedEvent}
              onHandlerStateChange={(e) => this.onChangeState(e)}
            >

              <Animated.View style={[styles.card, this.transformCard]}>
                {this.state.profiles[this.state.index]}
              </Animated.View>

            </PanGestureHandler>
          </View>

          <View style={{
            width: screen.width / 2,
            height: 7,
            borderRadius: 4,
            backgroundColor: "rgba(70,70,70,0.12)",
            top: "2.5%"
          }}>
            <View style={{
              backgroundColor: "#4dce93",
              width: this.state.total,
              height: "100%",
              borderRadius: 4,
            }}>

            </View>
          </View>

        </View>

      </>
    );
  };
};

export default HomeScreen;