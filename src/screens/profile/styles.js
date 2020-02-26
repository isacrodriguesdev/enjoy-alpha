import {StyleSheet, Dimensions} from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
  },
  name: {
    fontSize: 22,
    color: "rgb(100,100,100)",
    fontFamily: font.MontserratMedium,
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  album: {
    height: screen.height / 1.6
  },
  info: {
    paddingHorizontal: 7,
    paddingVertical: 0,
    paddingHorizontal: 15,
    paddingBottom: 100
  },
  infoTitleContainer: {
    backgroundColor: "rgb(83, 0, 130)",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    flexDirection: "row",
    alignItems: "center"
  },
  infoTitleText: {
    fontFamily: font.UbuntuRegular,
    color: "white",
    fontSize: 16
  },
  infoTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  infoText: {
    fontFamily: font.MerriweatherSansRegular,
    color: "rgb(120,120,120)",
    fontSize: 14
  },
  space: {
    marginVertical: 6
  }
});