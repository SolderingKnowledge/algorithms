// 1 example
function buyAndSell(array) {
  var current = 0;
  var next = 0;
  var profit = -1;
  var dontBuy = true;

  for (var i = 0; i < array.length; i++) {
    if (dontBuy) {
      current = array[i];
    }
    next = array[i + 1];

    if (next < current) {
      dontBuy = true;
    } else {
      var madeProfit = next - current;
      if (madeProfit > profit) {
        profit = madeProfit;
      }
      dontBuy = false;
    }
  }

  return profit;
}

buyAndSell([6, 9, 3, 21, 8, 5, 17, 19]);

// 2 example
function stockBuy(array) {
  var buy = 0;
  var sell = 0;
  var profit = -1;
  var bool = true;
  for (i = 0; i < array.length; i++) {
    if (bool) {
      buy = array[i];
      profit = "bought at: " + buy + " and sold at: " + sell;
    }
    sell = array[i + 1];
    if (buy > sell) {
      bool = true;
      profit = "bought at: " + buy + " and sold at: " + sell;
    }
    if (buy < sell) {
      bool = false;
      profit = "bought at: " + buy + " and sold at: " + sell;
    }
  }
  return profit;
}
stockBuy([3, 7, 8, 1, 2, 3, 4, 5, 6, 7]);
