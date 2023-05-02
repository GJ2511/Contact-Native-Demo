import { getColorByLetter } from "../../src/utils";

describe("getColorByLetter", () => {
	it("must return color FF6633", () => {
		const color = getColorByLetter("A");
		expect(color).toBe("#FF6633");
	});
});
