import { StyleSheet } from 'react-native';

export default {
  card: StyleSheet.create({
    cardBackground: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
    },
    cardButtons: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    cardButton: {
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
      elevation: 4
    },
    about: {
      height: "20%"
    },
    aboutName: {
      fontSize: 22,
      textAlign: "center",
      color: "white",
      textShadowColor: 'rgba(0, 0, 0, 0.7)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5
    },
    aboutAge: {
      textAlign: "center",
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
      textShadowColor: 'rgba(0, 0, 0, 0.7)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5
    },
    aboutLocation: {
      textAlign: "center",
      color: "white",
      fontSize: 17,
      textShadowColor: 'rgba(0, 0, 0, 0.7)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5
    }
  })
}