var btnClear = document.getElementById("btnClear");
var btnEquals = document.getElementById("btnEquals");
var btnMinus = document.getElementById("btnMinus");
var btnPlus = document.getElementById("btnPlus");
var btnSplit = document.getElementById("btnSplit");
var btnTimes = document.getElementById("btnTimes");

var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

var input = document.getElementById("operation");
var firstNum = "";
var secondNum = "";
var result = "";
var expression, result, operator;

input.addEventListener("keydown", function (event) {
  var key = event.key;

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  if (!isNumeric(key) && !isValidOperator(key)) {
    event.preventDefault();
  }

  if (input.value.length >= 25 && key !== "Backspace") {
    event.preventDefault();
  }
});

function isValidOperator(operator) {
  var operators = ["+", "-", "*", "/", "="];
  return operators.includes(operator);
}

function getLastCharacter() {
  var value = input.value;
  return value.charAt(value.length - 1);
}

btnPlus.addEventListener("click", function () {
  if (input.value !== "") {
    if (firstNum == "") {
      firstNum = input.value;
      input.value = "";
      
    } else {
      console.log("else" + firstNum);
      secondNum = input.value;
      result = parseFloat(firstNum) + parseFloat(secondNum);
      showResult();

      firstNum = "";
      secondNum = "";
    }
  }
});

btnEquals.addEventListener("click", function () {
  var expression = input.value;
  var result = eval(expression);

  input.value = formatNumber(result.toFixed(6));
});

btnClear.addEventListener("click", function () {
  firstNum = "";
  secondNum = "";
  result = "";
  input.value = "";
});

function showResult() {
  input = Number(input.value).toLocaleString();
  input.value = formatNumber(result.toFixed(6));
}
