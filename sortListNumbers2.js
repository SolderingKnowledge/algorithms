function sortNumbers2(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    var j = i - 1;
    while (j >= 0 && numbers[j] > current) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = current;
  }
  return numbers;
}

sortNumbers2([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
