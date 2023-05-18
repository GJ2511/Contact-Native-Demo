import * as actions from "./contactTypes";
import { AddContactAction, Contact, UpdateContactAction, DeleteContactAction } from '../../types/type';

export const addContact: AddContactAction = (data: Contact) => {
	return { type: actions.ADD_CONTACT, payload: data };
};

export const updateContact: UpdateContactAction = (contact: Contact, id: string) => {
	return { type: actions.UPDATE_CONTACT, payload: { contact, id } };
};

export const deleteContact: DeleteContactAction = (id: string) => {
	return { type: actions.DELETE_CONTACT, payload: id };
};
