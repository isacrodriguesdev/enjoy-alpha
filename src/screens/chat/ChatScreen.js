import React, { Component } from 'react';
import { View, TextInput, Text, Dimensions } from 'react-native';
// # styles
import styles from './styles';
import Output from './Output';
// # types
// # imports
// # services
// # utils
// # actions
// # components 

const screen = Dimensions.get("window");

class ChatScreen extends Component {

  state = {};

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.messages}>
          <Output message="" />
        </View>

        <View style={{padding: 10, bottom: 0, justifyContent: "flex-end", position: "absolute", width: "100%", backgroundColor: "white", justifyContent: "center", paddingVertical: 10}}>
          <View style={styles.entry}>
            <TextInput placeholder="Envie sua mensagem" style={styles.entryText} />
          </View>
        </View>


      </View>
    );
  };
};

export default ChatScreen;