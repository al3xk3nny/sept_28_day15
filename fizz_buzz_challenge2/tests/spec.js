describe("fizzBuzzChallenge", function() {

	it("should exist", function() {
		expect(fizzBuzz).toBeDefined();
	});

	it("should return an Error is argument is not a number", function () {
		expect(fizzBuzz("Fish")).toBe("Error");
	});
	
	it("should not return an Error is the argument is null", function() {
		expect(fizzBuzz(null)).toBe("Error");
	});
	
	it("should return FizzBuzz if argument is divisable by 3 and 5", function()	{
		expect(fizzBuzz(15)).toBe("FizzBuzz");	
	});
	
	it("should return Fizz if argument is divisable by 3", function() {
		expect(fizzBuzz(3)).toBe("Fizz");	
	});
	
	it("should return Buzz if argument is divisble by 5", function() {
		expect(fizzBuzz(5)).toBe("Buzz");	
	});

});