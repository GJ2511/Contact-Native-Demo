import { render, screen, fireEvent } from "@testing-library/react-native";
import { Alert } from "react-native";

import ContactForm from "../../src/components/ContactForm";
import {
	renderComponent,
	renderComponentToJSON,
	createTestProps,
} from "../../src/utils/helper";

describe("<ContactForm />", () => {
	jest.spyOn(Alert, "alert");

	const tree = renderComponentToJSON(ContactForm);

	it("should render ContactForm", () => {
		expect(tree.props.testID).toBe("contactForm");
	});

	test("should trigger validation alert when all fields are empty", async () => {
		const props = createTestProps({
			buttonText: "test",
		});
		const { getByTestId, rerender } = renderComponent(ContactForm, props);
		const btn = getByTestId("test");

		fireEvent.press(btn);

		expect(Alert.alert).toHaveBeenCalledWith(
			"Something went wrong",
			"Please fill the all fields"
		);
	});

	test("should trigger email validation for invalid", async () => {
		const props = createTestProps({
			buttonText: "test",
			firstNameInitial: "test",
			lastNameInitial: "test",
			emailInitial: "test",
			phoneNumberInitial: "121212",
		});
		const { getByTestId, rerender } = renderComponent(ContactForm, props);
		const btn = getByTestId("test");

		fireEvent.press(btn);

		expect(Alert.alert.mock.calls[1]).toEqual([
			"Something went wrong",
			"Please enter valid email.",
		]);
	});

	test("should not trigger validation for valid input", async () => {
		const onSubmit = jest.fn();
		const props = createTestProps({
			buttonText: "test",
			firstNameInitial: "test",
			lastNameInitial: "test",
			emailInitial: "test@test.com",
			phoneNumberInitial: "121212",
			onSubmit,
		});
		const { getByTestId, rerender } = renderComponent(ContactForm, props);
		const btn = getByTestId("test");

		fireEvent.press(btn);

		expect(Alert.alert.mock.calls.length).toBe(2);
		expect(onSubmit).toHaveBeenCalledWith({
			email: "test@test.com",
			firstName: "test",
			lastName: "test",
			phoneNumber: "121212",
		});
	});
});
