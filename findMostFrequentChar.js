// find frequently repeated letters in a word
// input=> "HELLO" output=> "L, 2"

function findMostFrequentChar(chars) {
	var object = {};
	var letter;
	var max = 1;
	for (var i of chars) {
		if (object[i]) {
			object[i]++;
		} else {
			object[i] = 1;
		}
		if (object[i] > max) {
			max = object[i];
			letter = i;
		}
	}
	return `${letter}, ${max}`;
}
findMostFrequentChar('HELLO');
