import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Dimensions,
	Linking,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";

import { getColorByLetter } from "../utils";
import normalize from "../utils/normalize";
import HeaderComponent from "../components/Header";
import { getContact } from "../redux/selectors/contactSelector";
import { deleteContact } from "../redux/actions/contactActions";
import { RootStackParamList, Contact } from "../types/type";

type Props = StackScreenProps<RootStackParamList, "Details">;

export default function DetailScreen({ navigation, route }: Props) {
	const dispatch = useDispatch();
	const { id } = route.params;

	const contactInfo: Contact = useSelector((state) => getContact(state, id));

	if (!contactInfo) {
		return null;
	}
	const color: string = getColorByLetter(contactInfo.firstName[0]);

	const handleDeleteContact: () => void = () => {
		dispatch(deleteContact(id));
		navigation.navigate("MyContact");
	};

	return (
		<View style={styles.container} testID="detailScreen">
			<HeaderComponent
				title={`${contactInfo.firstName} ${contactInfo.lastName}`}
			/>
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
						onPress={handleDeleteContact}
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
							style={{ alignSelf: "center" }}
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
							style={{ alignSelf: "center" }}
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
	text: { marginLeft: normalize(10), flex: 1 },
});
