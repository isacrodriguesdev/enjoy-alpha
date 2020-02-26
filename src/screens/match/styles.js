import { StyleSheet, Dimensions } from 'react-native';


const screen = Dimensions.get("window");

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		backgroundColor: "#1a1120",
		height: "100%"
	},
	card: {
		width: (screen.width / 1.5),
		marginHorizontal: 10,
		marginVertical: 10,
		elevation: 3
	},
	cardImage: {
		height: screen.width / 1.1,
	},
	// cardSelections: {
	// 	borderRightColor: "rgba(100,100,100,0.15)",
	// 	borderLeftColor: "rgba(100,100,100,0.15)",
	// 	borderBottomColor: "rgba(100,100,100,0.15)",
	// 	borderRightWidth: 1,
	// 	borderLeftWidth: 1,
	// 	borderBottomWidth: 1,
	// 	borderBottomLeftRadius: 2,
	// 	borderBottomRightRadius: 2,
	// 	width: "100%",
	// },
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		borderRadius: 5
		// borderTopLeftRadius: 7,
		// borderTopRightRadius: 7
	}
});