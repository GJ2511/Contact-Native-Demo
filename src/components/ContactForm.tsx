import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, TextInput, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import normalize from "../utils/normalize";
import { Contact } from "../types/type";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const NUMBER_REGEX = /[^0-9]/g;

type Props = {
	onSubmit: (data: Contact) => void;
	firstNameInitial: string;
	lastNameInitial: string;
	emailInitial: string;
	phoneNumberInitial: string;
	buttonText: string;
};

export default function ContactForm({
	onSubmit,
	firstNameInitial = "",
	lastNameInitial = "",
	emailInitial = "",
	phoneNumberInitial = "",
	buttonText = "",
}: Props) {
	const [firstName, setFirstName] = useState(firstNameInitial);
	const [lastName, setLastName] = useState(lastNameInitial);
	const [phoneNumber, setPhoneNumber] = useState(phoneNumberInitial);
	const [email, setEmail] = useState(emailInitial);

	function addContact() {
		if ((!firstName && !lastName) || phoneNumber.length === 0 || !email) {
			Alert.alert("Something went wrong", "Please fill the all fields");
			return;
		}

		if (EMAIL_REGEX.test(email) === false) {
			Alert.alert("Something went wrong", "Please enter valid email.");
			return;
		}

		const contactInfo: Contact = {
			firstName,
			lastName,
			phoneNumber,
			email,
		};
		onSubmit(contactInfo);
	}

	return (
		<View style={styles.container} testID="contactForm">
			<View style={styles.inputContainer}>
				<View style={styles.inputBlock} testID="firstNameBlock">
					<AntDesign name="user" style={styles.icon} />
					<TextInput
						label="First Name"
						style={styles.input}
						placeholder="FirstName"
						value={firstName}
						onChangeText={(text) => setFirstName(text)}
						testID="firstNameInput"
					/>
				</View>
				<View style={styles.inputBlock} testID="lastNameBlock">
					<AntDesign name="user" style={styles.icon} />
					<TextInput
						style={styles.input}
						label="Last Name"
						placeholder="LastName"
						value={lastName}
						onChangeText={(text) => setLastName(text)}
						testID="lastNameInput"
					/>
				</View>
				<View style={styles.inputBlock} testID="emailBlock">
					<AntDesign name="mail" style={styles.icon} />
					<TextInput
						style={styles.input}
						label="Email"
						placeholder="email"
						value={email}
						keyboardType="email-address"
						onChangeText={(text) => setEmail(text)}
						testID="emailInput"
					/>
				</View>
				<View style={styles.inputBlock} testID="numberBlock">
					<AntDesign name="phone" style={styles.icon} />
					<TextInput
						style={styles.input}
						placeholder="Phone Number"
						inputMode="numeric"
						keyboardType="numeric"
						value={phoneNumber}
						onChangeText={(text) =>
							setPhoneNumber(text.replace(NUMBER_REGEX, ""))
						}
						maxLength={10}
						numeric
						testID="numberInput"
					/>
				</View>
			</View>

			<Button
				title={buttonText}
				onPress={addContact}
				testID={buttonText.replaceAll(" ", "")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	inputContainer: {
		padding: normalize(10),
		margin: normalize(5),
	},
	inputBlock: {
		flexDirection: "row",
		paddingVertical: normalize(2),
	},
	icon: {
		fontSize: normalize(25),
		alignSelf: "center",
		marginHorizontal: normalize(5),
	},
	input: {
		borderBottomWidth: 0.5,
		borderBottomColor: "gray",
		padding: normalize(5),
		flex: 1,
	},
});
