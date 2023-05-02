import React, { useContext } from "react";

import ContactForm from "../components/ContactForm";
import { Context } from "../context/ContactContext";

const CreateContactsScreen = ({ navigation }) => {
	const { addContact } = useContext(Context);

	return (
		<ContactForm
			buttonText="Add Contact"
			onSubmit={(contactInfo) => {
				addContact(contactInfo, () => navigation.navigate("MyContact"));
			}}
		/>
	);
};

export default CreateContactsScreen;
