import { render, screen, fireEvent } from "@testing-library/react-native";
import EditContactsScreen from "../../src/screens/EditScreen";
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

describe("<EditContactsScreen />", () => {
	const props = createTestProps({
		onSubmit: callBack,
		buttonText: "Update Contact",
	});
	const tree = renderComponentToJSON(EditContactsScreen, props);

	it("should render contact form", () => {
		expect(tree[1].props.testID).toBe("contactForm");
	});

	test("contact form should populated with correct values ", async () => {
		const { getByTestId } = renderComponent(EditContactsScreen, props);

		const firstNameInput = getByTestId("firstNameInput");
		const lastNameInput = getByTestId("lastNameInput");
		const emailInput = getByTestId("emailInput");
		const numberInput = getByTestId("numberInput");

		expect(firstNameInput.props.value).toEqual(formData.firstName);
		expect(lastNameInput.props.value).toEqual(formData.lastName);
		expect(emailInput.props.value).toEqual(formData.email);
		expect(numberInput.props.value).toEqual(formData.number);
	});

	test("Edit contact form submit ", async () => {
		const { getByTestId } = renderComponent(EditContactsScreen, props);
		const updateBtn = getByTestId("UpdateContact");
		const firstNameInput = getByTestId("firstNameInput");
		const lastNameInput = getByTestId("lastNameInput");
		const emailInput = getByTestId("emailInput");
		const numberInput = getByTestId("numberInput");
		fireEvent.changeText(firstNameInput, formData.firstName);
		fireEvent.changeText(lastNameInput, formData.lastName);
		fireEvent.changeText(emailInput, formData.email);
		fireEvent.changeText(numberInput, formData.number);

		fireEvent.press(updateBtn);
		expect(props.navigation.navigate).toHaveBeenCalledWith("MyContact");
	});
});
