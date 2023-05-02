import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import normalize from "../utils/normalize";

const SearchBar = ({ term, setTerm, startSearch }) => {
	return (
		<View style={styles.bar} testID="searchBox">
			<Feather name="search" style={styles.icon} />
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				value={term}
				onChangeText={setTerm}
				onEndEditing={startSearch}
				testID="searchBar"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	bar: {
		flexDirection: "row",
		backgroundColor: "#f0f0f0",
		paddingVertical: normalize(5),
		borderColor: "#d0d0d0",
		borderRadius: normalize(5),
		marginHorizontal: normalize(10),
		marginVertical: normalize(10),
	},
	icon: {
		fontSize: normalize(35),
		alignSelf: "center",
		marginHorizontal: normalize(10),
	},
	input: {
		flex: 1,
		fontSize: normalize(20),
	},
});

export default SearchBar;
