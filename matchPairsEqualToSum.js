function matchPairsEqualToSum(numbers, sum) {
  var pairs = [];
  var list = [];

  for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    var complement = sum - current;
    if (list.indexOf(complement) !== -1) {
      pairs.push([current, complement]);
    }
    list.push(current);
  }

  return pairs;
}

matchPairsEqualToSum([2, 3, 4, 1, 3, 2], 5);
