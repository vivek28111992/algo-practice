const squaresAndSubtracts = list => {
	return list
		.map( num => num*num)
		.reduce( (accumulator, num) => accumulator-num);
}

console.log(squaresAndSubtracts([10, 5, 4, 2, 1]));