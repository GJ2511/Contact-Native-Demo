import { render, screen, fireEvent } from "@testing-library/react-native";
import IndexScreen from "../../src/screens/IndexScreen";
import {
	renderComponent,
	renderComponentToJSON,
	createTestProps,
} from "../../src/utils/helper";

describe("<IndexScreen />", () => {
	const tree = renderComponentToJSON(IndexScreen);

	it("should render three child", () => {
		expect(tree.children.length).toBe(3);
	});

	it("first child must be SearchBox component", () => {
		const firstChild = tree.children[0];
		expect(firstChild.props.testID).toBe("searchBox");
	});
	it("Second child must be flatlist component", () => {
		const child = tree.children[1];
		expect(child.props.testID).toBe("contactList");
	});
	it("Contact List must have a children", () => {
		const contactList = tree.children[1];
		expect(contactList.children[0].children.length).toBe(1);
	});
	it("Third child must be add contact icon component", () => {
		const child = tree.children[2];
		expect(child.props.testID).toBe("addContactIcon");
	});

	test("click on add button should redirect to add contact page", async () => {
		const props = createTestProps({});
		const { getByTestId, findByText } = renderComponent(IndexScreen, props);
		const addBtn = getByTestId("addContactIcon");
		fireEvent.press(addBtn);
		expect(props.navigation.navigate).toHaveBeenCalledWith("CreateContact");
	});

	test("click on contact list should redirect user to Details page", async () => {
		const props = createTestProps({});
		const { getByTestId, findByText } = renderComponent(IndexScreen, props);
		const listitem = getByTestId("contactListItem");
		fireEvent.press(listitem);
		expect(props.navigation.navigate).toHaveBeenCalledWith("Details", {
			id: 1,
		});
	});
});
