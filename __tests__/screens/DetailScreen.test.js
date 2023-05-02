import { render, screen, fireEvent } from "@testing-library/react-native";
import DetailScreen from "../../src/screens/DetailScreen";
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

describe("<DetailScreen />", () => {
	const props = createTestProps({});
	const tree = renderComponentToJSON(DetailScreen, props);

	it("should render detail page", () => {
		expect(tree.props.testID).toBe("detailScreen");
	});

	test("should render all the details", async () => {
		const { getByTestId } = renderComponent(DetailScreen, props);
		const nameContainer = getByTestId("nameContainer");
		const nametext = getByTestId("nametext");
		const deleteContactIcon = getByTestId("deleteContactIcon");
		const editContactIcon = getByTestId("editContactIcon");
		const detailsContainer = getByTestId("detailsContainer");
		const numberRow = getByTestId("numberRow");
		const numbertext = getByTestId("numbertext");
		const emailRow = getByTestId("emailRow");
		const emailText = getByTestId("emailText");

		expect(nameContainer).toBeTruthy();
		expect(deleteContactIcon).toBeTruthy();
		expect(editContactIcon).toBeTruthy();
		expect(detailsContainer).toBeTruthy();
		expect(numberRow).toBeTruthy();
		expect(emailRow).toBeTruthy();
		expect(nametext).toBeTruthy();
		expect(numbertext).toBeTruthy();
		expect(emailText).toBeTruthy();
		expect(nametext.props.children).toBe(
			`${formData.firstName} ${formData.lastName}`
		);
		expect(numbertext.props.children).toBe(formData.number);
		expect(emailText.props.children).toBe(formData.email);
	});

	test("Edit button should redirect to edit contact screen", async () => {
		const { getByTestId } = renderComponent(DetailScreen, props);
		const editContactIcon = getByTestId("editContactIcon");
		fireEvent.press(editContactIcon);
		expect(props.navigation.navigate).toHaveBeenCalledWith("Edit", {
			id: 1,
		});
	});

	test("Delete button should redirect to my contact screen", async () => {
		const { getByTestId } = renderComponent(DetailScreen, props);
		const deleteContactIcon = getByTestId("deleteContactIcon");
		fireEvent.press(deleteContactIcon);
		expect(props.navigation.navigate).toHaveBeenCalledWith("MyContact");
	});
});
