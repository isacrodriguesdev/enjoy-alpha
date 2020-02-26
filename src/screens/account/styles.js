import { StyleSheet, Dimensions } from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(247,247,248)",
  },
  profile: {
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    width: screen.width / 2.7,
    height: screen.width / 2.7,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  card: {
    backgroundColor: "rgba(83, 0, 130, 0.9)",
    width: "100%",
    height: screen.width,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5
  },
  iconCard: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 15
  },
  iconCardText: {
    fontSize: 14,
    color: "rgb(230,230,230)",
    fontFamily: font.MontserratMedium,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    top: 4
  },
  cardUserName: {
    fontSize: 17,
    color: "rgb(250,250,250)",
    fontFamily: font.MontserratMedium,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  buttonConnectInstagram: {
    backgroundColor: "rgb(255, 40, 70)",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonConnectInstagramText: {
    fontSize: 16,
    color: "rgb(250,250,250)",
    fontFamily: font.UbuntuMedium,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginLeft: 7
  }
})