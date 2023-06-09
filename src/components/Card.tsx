import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { getColorByLetter } from "../utils/index";
import normalize from "../utils/normalize";
import { Contact } from "../types/type";

type Props = {
	data: Contact;
};

export default function Card({ data }: Props) {
	const { firstName, lastName } = data;
	const color: string = getColorByLetter(firstName[0]);

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
		padding: normalize(5),
		margin: normalize(2),
	},
	cardBody: {
		flexDirection: "row",
		alignItems: "center",
	},
	name: {
		flex: 1,
		marginLeft: normalize(5),
	},
	iconContainer: {
		display: "flex",
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		alignItems: "center",
		justifyContent: "center",
		padding: 1,
	},
});
