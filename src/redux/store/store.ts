import contactsReducer from "../reducer/contactReducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(contactsReducer);

export default store;
