import { act } from "@testing-library/react-native";
import * as actions from "../actions/contactTypes";

const INIT_STATE = [
	{
		id: 1,
		firstName: "Test first name",
		lastName: "Test last name",
		email: "test@test.com",
		phoneNumber: "123456789",
	},
];

const contactsReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case actions.ADD_CONTACT:
			return [
				...state,
				{ ...action.payload, id: Math.floor(Math.random() * 999) },
			];

		case actions.UPDATE_CONTACT:
			const { id, contact } = action.payload;
			return state.map((cont) => {
				if (cont.id === id) {
					return contact;
				}

				return cont;
			});

		case actions.DELETE_CONTACT:
			return state.filter((contact) => contact.id !== action.payload);

		default:
			return state;
	}
};

export default contactsReducer;
