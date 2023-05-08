import React, { useContext } from "react";
import { View } from "react-native";

import ContactForm from "../components/ContactForm";
import { Context } from "../context/ContactContext";
import HeaderComponent from "../components/Header";

const CreateContactsScreen = ({ navigation }) => {
	const { addContact } = useContext(Context);

	return (
		<>
			<HeaderComponent title={`Create Contact`} navigation={navigation} />
			<ContactForm
				buttonText="Add Contact"
				onSubmit={(contactInfo) => {
					addContact(contactInfo, () =>
						navigation.navigate("MyContact")
					);
				}}
			/>
		</>
	);
};

export default CreateContactsScreen;
