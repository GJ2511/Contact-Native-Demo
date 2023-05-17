import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import normalize from "../utils/normalize";

const HeaderComponent = ({ title, hideBack = false }) => {
	const navigation = useNavigation();

	return (
		<View style={styleSheet.layout}>
			{!hideBack && (
				<TouchableOpacity onPress={navigation.goBack}>
					<MaterialIcons
						name="keyboard-arrow-left"
						color="black"
						size={normalize(28)}
					/>
				</TouchableOpacity>
			)}
			<Text style={styleSheet.headerContent}>{title}</Text>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	layout: {
		borderWidth: 1,
		borderColor: "black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerContent: {
		alignSelf: "flex-end",
		flex: 1,
	},
});

export default HeaderComponent;
