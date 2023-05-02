import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import ContactForm from "../components/ContactForm";
import { Context } from "../context/ContactContext";
import normalize from "../utils/normalize";

const EditContactsScreen = ({ navigation, route }) => {
	const { state, editContact } = useContext(Context);
	const { id } = route.params;
	const contactInfo = state.find((cont) => cont.id === id);

	if (!contactInfo) {
		return null;
	}

	return (
		<ContactForm
			buttonText="Update Contact"
			firstNameInitial={contactInfo.firstName}
			lastNameInitial={contactInfo.lastName}
			emailInitial={contactInfo.email}
			phoneNumberInitial={contactInfo.phoneNumber}
			onSubmit={(contactInfo) => {
				editContact(id, contactInfo, () =>
					navigation.navigate("MyContact")
				);
			}}
		/>
	);
};
const styles = StyleSheet.create({
	view: {
		padding: normalize(10),
	},
	title: {
		fontSize: normalize(20),
		textAlign: "center",
		marginBottom: normalize(10),
	},
});

export default EditContactsScreen;
