import React, { useContext } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import ContactForm from "../components/ContactForm";
import { Context } from "../context/ContactContext";
import HeaderComponent from "../components/Header";

import { addContact } from "../redux/actions/contactActions";

const CreateContactsScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const handleSubmit = (contactInfo) => {
		dispatch(addContact(contactInfo));
		navigation.navigate("MyContact");
	};

	return (
		<>
			<HeaderComponent title={`Create Contact`} />
			<ContactForm buttonText="Add Contact" onSubmit={handleSubmit} />
		</>
	);
};

export default CreateContactsScreen;
