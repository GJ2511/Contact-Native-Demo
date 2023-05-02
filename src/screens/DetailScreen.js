import React, { useState, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Dimensions,
	Linking,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getColorByLetter } from "../utils";
import { Context } from "../context/ContactContext";
import normalize from "../utils/normalize";

export default function DetailScreen({ navigation, route }) {
	const { state, deleteContact } = useContext(Context);
	const { id } = route.params;
	const contactInfo = state.find((cnt) => cnt.id === id);
	if (!contactInfo) {
		return null;
	}
	const color = getColorByLetter(contactInfo.firstName[0]);

	return (
		<View style={styles.container} testID="detailScreen">
			<ImageBackground
				style={{
					...styles.backgroundImage,
					backgroundColor: color,
				}}
				testID="nameContainer"
			>
				<View>
					<Text
						style={styles.mainText}
						testID="nametext"
					>{`${contactInfo.firstName} ${contactInfo.lastName}`}</Text>
				</View>
				<View style={{ marginLeft: "auto" }}>
					<TouchableOpacity
						onPress={() =>
							deleteContact(id, () => {
								navigation.navigate("MyContact");
							})
						}
						testID="deleteContactIcon"
						style={styles.icon}
					>
						<AntDesign
							name="delete"
							size={normalize(28)}
							color="white"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Edit", { id })}
						testID="editContactIcon"
						style={{ ...styles.icon, right: normalize(50) }}
					>
						<Feather
							name="edit-2"
							size={normalize(28)}
							color="white"
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>

			<View
				style={{ flex: 1, marginTop: normalize(20) }}
				testID="detailsContainer"
			>
				<View style={styles.detailsContainer}>
					<View style={styles.row} testID="numberRow">
						<Text style={styles.text} testID="numbertext">
							{contactInfo.phoneNumber}
						</Text>

						<Ionicons
							name="call"
							size={normalize(24)}
							color="black"
							onPress={() =>
								Linking.openURL(
									`tel:${contactInfo.phoneNumber}`
								)
							}
						/>
					</View>
					<View style={styles.row} testID="emailRow">
						<Text style={styles.text} testID="emailText">
							{contactInfo.email}
						</Text>

						<AntDesign
							name="mail"
							size={normalize(24)}
							color="black"
							onPress={() =>
								Linking.openURL(`mailto:${contactInfo.email}`)
							}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		width: Dimensions.get("screen").width,
		height: Dimensions.get("screen").height / 3,
		justifyContent: "space-between",
		display: "flex",
		flexDirection: "row",
	},
	mainText: {
		fontSize: 30,
		color: "white",
		fontWeight: "bold",
	},
	detailsContainer: {
		flex: 1,
		marginHorizontal: normalize(10),
		marginBottom: normalize(20),
		paddingHorizontal: normalize(10),
		elevation: normalize(5),
		paddingVertical: normalize(20),
		backgroundColor: "white",
	},
	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: normalize(5),
	},
	icon: {
		position: "absolute",
		bottom: normalize(20),
		right: normalize(20),
	},
	text: { fontSize: normalize(16), marginLeft: normalize(10) },
});
