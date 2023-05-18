import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import HeaderComponent from "../components/Header";
import normalize from "../utils/normalize";
import { getAllContacts } from "../redux/selectors/contactSelector";
import { RootStackParamList, Contact } from "../types/type";

type Props = StackScreenProps<RootStackParamList, "MyContact">;

const IndexScreen = ({ navigation }: Props) => {
	const contacts: Array<Contact> = useSelector(getAllContacts);
	const [term, setTerm] = useState("");

	const filterContacts: Array<Contact> =
		term.length === 0
			? contacts
			: contacts.filter((cont: Contact) => {
					const lowerterm: string = term.toLowerCase();
					return (
						cont.firstName.toLowerCase().includes(lowerterm) ||
						cont.lastName.toLowerCase().includes(lowerterm) ||
						cont.phoneNumber.toLowerCase().includes(lowerterm) ||
						cont.email.toLowerCase().includes(lowerterm)
					);
			  });

	return (
		<View style={styles.container}>
			<HeaderComponent title={"My Contacts"} hideBack={true} />
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
