//find missing number in array which are ascending order of numbers

//input=>[1, 2, 3, 5, 6, 7, 8, 9, 10] output=> 4
function findMissingNum(numbers) {
	var missing = numbers[0];
	for (var i = 0; i <= numbers.length; i++) {
		if (numbers.indexOf(i) == -1) {
			missing = i;
		}
	}
	return missing;
}
findMissingNum([ 1, 2, 3, 5, 6, 7, 8, 9, 10 ]);
