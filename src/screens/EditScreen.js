import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../components/ContactForm";
import { Context } from "../context/ContactContext";
import HeaderComponent from "../components/Header";
import normalize from "../utils/normalize";
import { getContact } from "../redux/selectors/contactSelector";
import { updateContact } from "../redux/actions/contactActions";

const EditContactsScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const { id } = route.params;

	const contactInfo = useSelector((state) => getContact(state, id));

	if (!contactInfo) {
		return null;
	}

	const handleSubmit = (contactInfo) => {
		dispatch(updateContact(contactInfo, id));
		navigation.navigate("MyContact");
	};

	return (
		<>
			<HeaderComponent title={`Edit Contact`} />
			<ContactForm
				buttonText="Update Contact"
				firstNameInitial={contactInfo.firstName}
				lastNameInitial={contactInfo.lastName}
				emailInitial={contactInfo.email}
				phoneNumberInitial={contactInfo.phoneNumber}
				onSubmit={handleSubmit}
			/>
		</>
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
