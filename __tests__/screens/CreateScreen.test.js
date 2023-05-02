import { render, screen, fireEvent } from "@testing-library/react-native";
import CreateContactsScreen from "../../src/screens/CreateScreen";
import {
	renderComponent,
	renderComponentToJSON,
	createTestProps,
} from "../../src/utils/helper";
import { addContact } from "../../src/context/ContactContext";

const formData = {
	firstName: "Test first name",
	lastName: "Test last name",
	email: "test@test.com",
	number: "123456789",
};

const callBack = jest.fn();

describe("<CreateContactsScreen />", () => {
	const tree = renderComponentToJSON(CreateContactsScreen);
	const props = createTestProps({
		onSubmit: callBack,
		buttonText: "Add Contact",
	});

	it("should render contact form", () => {
		expect(tree.props.testID).toBe("contactForm");
	});

	test("contact form submit ", async () => {
		const { getByTestId } = renderComponent(CreateContactsScreen, props);
		const addBtn = getByTestId("AddContact");
		const firstNameInput = getByTestId("firstNameInput");
		const lastNameInput = getByTestId("lastNameInput");
		const emailInput = getByTestId("emailInput");
		const numberInput = getByTestId("numberInput");
		fireEvent.changeText(firstNameInput, formData.firstName);
		fireEvent.changeText(lastNameInput, formData.lastName);
		fireEvent.changeText(emailInput, formData.email);
		fireEvent.changeText(numberInput, formData.number);

		fireEvent.press(addBtn);
		//Will ask this on demo why not working
		expect(props.onSubmit).toHaveBeenCalled();
		expect(props.navigation.navigate).toHaveBeenCalledWith("MyContact");
	});
});
