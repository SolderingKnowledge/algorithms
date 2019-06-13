//input => "hello" output => "Hello"
function capitalizeFirstLetterOfWord(str) {
	var splitted = str.split('');
	var upperedFirst = splitted[0].toUpperCase();
	splitted[0] = upperedFirst;
	return splitted.join('');
}
capitalizeFirstLetterOfWord('hello');
