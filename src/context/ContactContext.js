import React from "react";

import createDataContext from "./createDataContext";

const ADD_CONTACTS = "ADD_CONTACTS";
const EDIT_CONTACTS = "EDIT_CONTACTS";
const DELETE_CONTACTS = "DELETE_CONTACTS";

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case ADD_CONTACTS:
			return [
				...state,
				{ ...payload, id: Math.floor(Math.random() * 999) },
			];
		case EDIT_CONTACTS:
			return state.map((contact) => {
				if (contact.id === payload.id) {
					return payload.contact;
				}

				return contact;
			});
		case DELETE_CONTACTS:
			return state.filter((contact) => contact.id !== payload);
		default:
			return state;
	}
};

export const addContact = (dispatch) => {
	return (newContact, cb) => {
		dispatch({ type: ADD_CONTACTS, payload: newContact });
		cb();
	};
};

export const deleteContact = (dispatch) => {
	return (id, cb) => {
		dispatch({ type: DELETE_CONTACTS, payload: id });
		cb();
	};
};

export const editContact = (dispatch) => {
	return (id, contact, cb) => {
		dispatch({ type: EDIT_CONTACTS, payload: { id, contact } });
		cb();
	};
};

export const { Context, Provider } = createDataContext(
	reducer,
	{ addContact, deleteContact, editContact },
	[
		{
			id: 1,
			firstName: "Test first name",
			lastName: "Test last name",
			email: "test@test.com",
			phoneNumber: "123456789",
		},
	]
);
