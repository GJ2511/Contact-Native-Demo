import { render, screen, fireEvent } from "@testing-library/react-native";
import Card from "../../src/components/Card";
import {
	renderComponent,
	renderComponentToJSON,
	createTestProps,
} from "../../src/utils/helper";

const data = {
	firstName: "Test first name",
	lastName: "Test last name",
	email: "test@test.com",
	number: "123456789",
};

describe("<Card />", () => {
	const props = createTestProps({
		data,
	});
	const tree = renderComponentToJSON(Card, props);

	it("should render Card", () => {
		expect(tree.props.testID).toBe("contactCard");
	});

	test("should render all the card details", async () => {
		const { getByTestId } = renderComponent(Card, props);
		const contactCardbody = getByTestId("contactCardbody");
		const contactCardCircle = getByTestId("contactCardCircle");
		const contactCardCircletext = getByTestId("contactCardCircletext");
		const contactCardName = getByTestId("contactCardName");

		expect(contactCardbody).toBeTruthy();
		expect(contactCardCircle).toBeTruthy();
		expect(contactCardCircletext).toBeTruthy();
		expect(contactCardName).toBeTruthy();
		expect(contactCardName.props.children).toBe(
			`${data.firstName} ${data.lastName}`
		);
		expect(contactCardCircle.props.style.backgroundColor).toBe("#33FFCC");
	});
});
