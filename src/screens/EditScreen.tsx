import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";

import ContactForm from "../components/ContactForm";
import HeaderComponent from "../components/Header";
import normalize from "../utils/normalize";
import { getContact } from "../redux/selectors/contactSelector";
import { updateContact } from "../redux/actions/contactActions";
import { RootStackParamList, Contact } from "../types/type";

type Props = StackScreenProps<RootStackParamList, "Edit">;

const EditContactsScreen = ({ navigation, route }: Props) => {
	const dispatch = useDispatch();
	const { id } = route.params;

	const contactInfo: Contact = useSelector((state) => getContact(state, id));

	if (!contactInfo) {
		return null;
	}

	const handleSubmit: (data: Contact) => void = (contactInfo: Contact) => {
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
