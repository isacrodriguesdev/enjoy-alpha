import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: screen.width - (screen.width / 1.1),
    elevation: 5,
    height: 60,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  card: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    width: screen.width / 1.15,
    height: "100%",
    elevation: 3
  }
});