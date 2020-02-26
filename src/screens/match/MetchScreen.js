import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
// # styles
import styles from './styles';
import { font } from '../../styles/fonts';
// # types
// # imports
// # services
// # utils
// # actions
// # components 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const users = [
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
		city: "Gôiania"
	},
	{
		name: "Raquel Neves",
		photo: "https://conteudo.imguol.com.br/c/bol/entretenimento/16/2019/01/20/savanna-rehm-1548021565835_v2_1080x1350.jpg",
		age: 24,
		city: "Gôiania"
	},
	{
		name: "Aline",
		photo: "https://i2.wp.com/jetsetters.com.br/wp-content/uploads/2017/12/WhatsApp-Image-2017-12-23-at-17.58.34.jpeg?resize=1024%2C1280",
		age: 28,
		city: "Gôiania"
	},
]

export default function (props) {

	const renderMatches = () => {

		return users.map((item, index) => (
			<TouchableOpacity>
				<View style={styles.card} key={index.toString()}>
					<View style={styles.cardImage}>
						<ImageBackground source={{ uri: item.photo }} style={styles.image}>
							
						</ImageBackground>
					</View>

				</View>
			</TouchableOpacity>
		))
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				{renderMatches()}
			</View>

		</ScrollView>
	);
};