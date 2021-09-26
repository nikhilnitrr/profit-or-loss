var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");


function profitAmount(sellPrice, costPrice, quantity) {
  return (sellPrice - costPrice) * quantity;
}

function lossAmount(sellPrice, costPrice, quantity) {
  return (costPrice - sellPrice) * quantity;
}

function lossPercent(totalCost) {}

function evaluate() {
  var inputOne = initialPrice.value;
  var inputTwo = quantity.value;
  var inputThree = currentPrice.value;

  if (!inputOne || !inputTwo || !inputThree) {
    output.innerText = "Please fill out all the fields";
  } else if (inputTwo <= 0) {
    output.innerText = "Invalid no of stocks";
  } else {
    var costPrice = inputOne * inputTwo;

    if (inputThree < inputOne) {
      var loss = lossAmount(inputThree, inputOne, inputTwo);
      loss = loss.toFixed(2);
      var lossPercent = (loss / costPrice) * 100;
      lossPercent = lossPercent.toFixed(2);
      output.innerText = `😬😬 Your loss is ${loss} and loss percentage is ${lossPercent} %`;
    } else if (inputThree == inputOne) {
      output.innerText = "🙃🙃 No profit & No loss";
    } else {
      var profit = profitAmount(inputThree, inputOne, inputTwo);
      profit = profit.toFixed(2);
      var profitPercent = (profit / costPrice) * 100;
      profitPercent = profitPercent.toFixed(2);
      output.innerText = `😀😀 Your profit is ${profit} and profit percentage is ${profitPercent} %`;
    }
  }
}

btn.addEventListener("click", evaluate);
