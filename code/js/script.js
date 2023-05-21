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

  if (key === "." && input.value.includes(".")) {
    event.preventDefault();
  }

  if (!isNumeric(key) && !isValidOperator(key)) {
    event.preventDefault();
  }

  if (input.value.length >= 25 && key !== "Backspace") {
    event.preventDefault();
  }
});

function isNumeric(value) {
  return /^\d+$/.test(value);
}

function isValidOperator(operator) {
  var operators = ["+", "-", "*", "/", "="];
  return operators.includes(operator);
}

function formatNumber(number) {
  return Number(number).toLocaleString();
}

function getLastCharacter() {
  var value = input.value;
  return value.charAt(value.length - 1);
}

function hasOperatorInserted() {
  var value = input.value;
  var operators = ["+", "-", "*", "/"];
  return operators.some(function (operator) {
    return value.includes(operator);
  });
}

btnPlus.addEventListener("click", function () {
  if (input.value !== "") {
    if (firstNum == "") {
      firstNum = input.value;
      input.value = "";
    } else if (secondNum == "" && result == "") {
      secondNum = input.value;
      result = parseFloat(firstNum) + parseFloat(secondNum);

      showResult();
    } else if (result != "") {
      firstNum = result;
      secondNum = input.value;
      result = parseFloat(firstNum) + parseFloat(secondNum);

      showResult();
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

function showResult(firstNum, secondNum) {
    result = parseFloat(result);
  input.value = formatNumber(result.toFixed(6));

  firstNum = "";
  secondNum = "";
}
