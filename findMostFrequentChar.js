function findMostFrequentChar(chars) {
  var object = {};
  for (var i of chars) {
    if (object[i]) {
      object[i]++;
    } else {
      object[i] = 1;
    }
  }
  return object;
}
findMostFrequentChar("HELLO");
