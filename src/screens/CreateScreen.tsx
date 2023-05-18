import React from "react";
import { useDispatch } from "react-redux";
import type { StackScreenProps } from "@react-navigation/stack";

import ContactForm from "../components/ContactForm";
import HeaderComponent from "../components/Header";

import { addContact } from "../redux/actions/contactActions";
import { RootStackParamList, Contact } from "../types/type";

type Props = StackScreenProps<RootStackParamList, "CreateContact">;

const CreateContactsScreen = ({ navigation }: Props) => {
	const dispatch = useDispatch();

	const handleSubmit = (contactInfo: Contact) => {
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
