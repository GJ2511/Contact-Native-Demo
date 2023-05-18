import { IAction } from "./interface";

export type Contact = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export type AddContactAction = (data: Contact) => IAction;
export type UpdateContactAction = (data: Contact, id: string) => IAction;
export type DeleteContactAction = (id: string) => IAction;

export type RootStackParamList = {
    MyContact: undefined;
    CreateContact: undefined;
    Details: { id: string };
    Edit: { id: string };
};