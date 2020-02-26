import { StyleSheet, Dimensions } from 'react-native';
import { font } from '../../styles/fonts';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: "100%"
  },
  header: {
    backgroundColor: "rgb(83, 40, 130)",
    width: screen.width,
    height: 65,
    elevation: 5
  },
  entry: {
    borderRadius: 5,
    backgroundColor: "rgb(245,245,245)",
    // elevation: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    height: 40
  },
  entryText: {
    height: "100%",
    fontFamily: font.MontserratMedium,
    paddingHorizontal: 10,
    fontSize: 16
  },
  messages: {
    paddingHorizontal: 25,
    marginTop: 20
  },
  message: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start",
    maxWidth: "80%"
  },
  messageText: {
    fontFamily: font.MontserratMedium,
    color: "white",
  }
});