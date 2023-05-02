import { render, screen, fireEvent } from "@testing-library/react-native";
import SearchBar from "../../src/components/SearchBar";
import {
	renderComponent,
	renderComponentToJSON,
	createTestProps,
} from "../../src/utils/helper";

describe("<SearchBar />", () => {
	const props = createTestProps({
		term: "",
		setTerm: jest.fn(),
		startSearch: jest.fn(),
	});
	const tree = renderComponentToJSON(SearchBar, props);

	it("should render SearchBar", () => {
		expect(tree.props.testID).toBe("searchBox");
	});

	test("searchbox funtionality", async () => {
		const { getByTestId, rerender } = renderComponent(SearchBar, props);
		const searchBar = getByTestId("searchBar");

		expect(searchBar).toBeTruthy();
		expect(searchBar.props.value).toEqual("");

		fireEvent.changeText(searchBar, "test");
		expect(props.setTerm).toHaveBeenCalled();
	});
});
