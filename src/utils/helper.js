import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { Provider } from "../context/ContactContext";

export const createTestProps = (props) => ({
	navigation: {
		state: { params: {} },
		dispatch: jest.fn(),
		goBack: jest.fn(),
		dismiss: jest.fn(),
		navigate: jest.fn(),
		openDrawer: jest.fn(),
		closeDrawer: jest.fn(),
		toggleDrawer: jest.fn(),
		getParam: jest.fn(),
		setParams: jest.fn(),
		addListener: jest.fn(),
		push: jest.fn(),
		replace: jest.fn(),
		pop: jest.fn(),
		popToTop: jest.fn(),
		isFocused: jest.fn(),
	},
	route: {
		params: {
			id: 1,
		},
	},
	...props,
});

export function renderComponentToJSON(Component, props) {
	return renderer
		.create(
			<Provider>
				<Component {...props} />
			</Provider>
		)
		.toJSON();
}

export function renderComponent(Component, props) {
	return render(
		<Provider>
			<Component {...props} />
		</Provider>
	);
}
