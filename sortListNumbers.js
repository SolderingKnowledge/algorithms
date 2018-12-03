function sortlistNumbers(numbers) {
  for (var i = numbers.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        var current = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = current;
      }
    }
  }

  return numbers;
}

sortlistNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
