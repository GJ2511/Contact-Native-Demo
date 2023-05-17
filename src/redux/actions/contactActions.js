import * as actions from "./contactTypes";

export const addContact = (data) => {
	return { type: actions.ADD_CONTACT, payload: data };
};

export const updateContact = (contact, id) => {
	return { type: actions.UPDATE_CONTACT, payload: { contact, id } };
};

export const deleteContact = (id) => {
	return { type: actions.DELETE_CONTACT, payload: id };
};
