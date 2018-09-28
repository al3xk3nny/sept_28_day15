function fizzBuzz() {
	var myArray = [];
	for (let i=1; i<=100; i++) {
		if (i%3 === 0) {
			myArray.push("Fizz");
		}
		else if (i%5 === 0) {
			myArray.push("Buzz");
		}
		else {
			myArray.push(i);
		}
	}
	return myArray;
}