const getRoot = (state) => state;

const getAllContacts = (state) => getRoot(state);

const getContact = (state, id) => {
	const contacts = getRoot(state);

	return contacts.find((con) => con.id === id);
};

export { getAllContacts, getContact };
