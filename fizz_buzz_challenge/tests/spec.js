describe("fizzBuzzChallenge()", function() {

	it("should exist", function() {
		expect(fizzBuzz).toBeDefined();
	});

	it("should return an array of 100 elements", function() {
		let result = fizzBuzz();
		expect( result.length ).toEqual(100);
	});

	it("should contains 'Fizz' in third position", function() {
		let result = fizzBuzz();
		expect( result[2] ).toEqual("Fizz");
	});

	it("should contains 'Fizz' in sixth position", function() {
		let result = fizzBuzz();
		expect( result[5] ).toEqual("Fizz");
	});

	it("should contains 'Buzz' in fifth position", function() {
		let result = fizzBuzz();
		expect( result[4] ).toEqual("Buzz");
	});

	it("should contains 'Buzz' in ninth position", function() {
		let result = fizzBuzz();
		expect( result[9] ).toEqual("Buzz");
	});


});