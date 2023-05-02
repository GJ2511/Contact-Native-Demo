import React, { useContext, useState } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Context } from "../context/ContactContext";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import normalize from "../utils/normalize";

const IndexScreen = ({ navigation }) => {
	const { state: contacts, deleteContacts } = useContext(Context);

	const [term, setTerm] = useState("");

	const filterContacts =
		term.length === 0
			? contacts
			: contacts.filter((cont) => {
					const lowerterm = term.toLowerCase();
					return (
						cont.firstName.toLowerCase().includes(lowerterm) ||
						cont.lastName.toLowerCase().includes(lowerterm) ||
						cont.phoneNumber.toLowerCase().includes(lowerterm) ||
						cont.email.toLowerCase().includes(lowerterm)
					);
			  });

	return (
		<View style={styles.container}>
			<SearchBar term={term} setTerm={setTerm} />
			<FlatList
				data={filterContacts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Details", {
								id: item.id,
							})
						}
						testID="contactListItem"
					>
						<Card data={item} />
					</TouchableOpacity>
				)}
				testID="contactList"
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("CreateContact")}
				testID="addContactIcon"
			>
				<Ionicons
					name="add-circle"
					size={normalize(48)}
					color="red"
					style={styles.addIcon}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	addIcon: {
		bottom: normalize(20),
		right: normalize(20),
		position: "absolute",
		zIndex: 1,
	},
});

export default IndexScreen;
