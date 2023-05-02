import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { getColorByLetter } from "../utils/index";

export default function Card({ data }) {
	const { firstName, lastName, phoneNumber } = data;
	const color = getColorByLetter(firstName[0]);

	return (
		<View style={styles.card} testID="contactCard">
			<View style={styles.cardBody} testID="contactCardbody">
				<View
					style={{ ...styles.iconContainer, backgroundColor: color }}
					testID="contactCardCircle"
				>
					<Text style={styles.icon} testID="contactCardCircletext">
						{firstName[0]}
					</Text>
				</View>
				<Text
					style={styles.name}
					testID="contactCardName"
				>{`${firstName} ${lastName}`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 5,
		margin: 2,
	},
	cardBody: {
		flexDirection: "row",
		alignItems: "center",
	},
	name: {
		fontSize: 18,
		flex: 1,
		marginLeft: 5,
	},
	iconContainer: {
		display: "flex",
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		alignItems: "center",
		justifyContent: "center",
		padding: 1,
		borderRadius: 10,
	},
});