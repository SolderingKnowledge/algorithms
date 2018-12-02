function reverseWords(words) {
  var splitted = words.split(" ");
  var reversed = [];

  splitted.forEach(word => {
    var reverse = "";
    for (var j = word.length - 1; j >= 0; j--) {
      reverse += word[j];
    }
    reversed.push(reverse);
  });

  return reversed.join(" ");
}

reverseWords("It is awesome");
