describe("drinkAboutChallenge()", function() {

	it("should exist", function() {
		expect(whatCanIDrink).toBeDefined();
	});
	
	it("should return a number", function() {
		let result = whatCanIDrink(14);
		let typeResult = typeof(result);

		expect(typeResult).toEqual("number");
	});
	
	it("should return an Error if argument is null", function() {
		expect(whatCanIDrink(null)).toBe("Error");	
	});
	
	it("should return an Error if argument is not a number", function() {
		expect(whatCanIDrink("string")).toBe("Error");
	});
	
	//Need to finish tests

});