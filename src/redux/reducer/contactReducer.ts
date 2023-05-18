import * as actions from "../actions/contactTypes";

import { Contact } from '../../types/type'
import { IAction } from '../../types/interface'

const INIT_STATE: Array<Contact> = [
	{
		id: 1,
		firstName: "Test first name",
		lastName: "Test last name",
		email: "test@test.com",
		phoneNumber: "123456789",
	},
];

const contactsReducer = (state: Array<Contact> = INIT_STATE, action: IAction) => {
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
