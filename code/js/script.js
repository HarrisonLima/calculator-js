var btnClear = document.getElementById("btnClear");
var btnBackspace = document.getElementById("btnBackspace");
var btnEquals = document.getElementById("btnEquals");
var btnMinus = document.getElementById("btnMinus");
var btnPlus = document.getElementById("btnPlus");
var btnSplit = document.getElementById("btnSplit");
var btnTimes = document.getElementById("btnTimes");
var btnPercent = document.getElementById("btnPercent");

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
var operator = "";
var result = "";
var expression, result;

function btn0__Event(){
  input.value = input.value + "0";
}

function btn1__Event(){
  input.value = input.value + "1";
}

function btn2__Event(){
  input.value = input.value + "2";
}

function btn3__Event(){
  input.value = input.value + "3";
}

function btn4__Event(){
  input.value = input.value + "4";
}

function btn5__Event(){
  input.value = input.value + "5";
}

function btn6__Event(){
  input.value = input.value + "6";
}

function btn7__Event(){
  input.value = input.value + "7";
}

function btn8__Event(){
  input.value = input.value + "8";
}

function btn9__Event(){
  input.value = input.value + "9";
}

btn0.addEventListener("click", btn0__Event);
btn1.addEventListener("click", btn1__Event);
btn2.addEventListener("click", btn2__Event);
btn3.addEventListener("click", btn3__Event);
btn4.addEventListener("click", btn4__Event);
btn5.addEventListener("click", btn5__Event);
btn6.addEventListener("click", btn6__Event);
btn7.addEventListener("click", btn7__Event);
btn8.addEventListener("click", btn8__Event);
btn9.addEventListener("click", btn9__Event);

input.addEventListener("input", function(event) {
  var inputValue = event.target.value;
  var sanitizedValue = sanitizeInput(inputValue);
  event.target.value = sanitizedValue;
});

function sanitizeInput(value) {
  var sanitizedValue = value.replace(/[^0-9.]/g, "");
  var decimalCount = sanitizedValue.split(".").length - 1;

  if (decimalCount > 1) {
    sanitizedValue = sanitizedValue.replace(/\./g, "");
  }

  return sanitizedValue;
}

function isValidOperator(operator) {
  var operators = ["+", "-", "*", "/", "="];
  return operators.includes(operator);
}

input.addEventListener("keydown", function(event) {
  var key = event.key;

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  if (!isNumeric(key) && !isValidOperator(key) && key !== "." && key !== "Backspace") {
    event.preventDefault();
  }

  if (input.value.includes(".") && key === ".") {
    event.preventDefault();
  }

  if (input.value.length >= 25 && key !== "Backspace") {
    event.preventDefault();
  }
});

function btnBackspace__Event(){
  input.value = input.value.slice(0, -1);
}

function btnPlus__Event() {
  if (input.value !== "") {
    if (firstNum == "" && operator == ""  ) {
      firstNum = input.value;
      operator = "+";

      input.value = "";
    } else {
      secondNum = input.value;
      result = parseFloat(firstNum) + parseFloat(secondNum);

      showResult();

      firstNum = "";
      secondNum = "";
      operator = "";
    }
  }
}

function btnMinus__Event() {
  if (input.value !== "") {
    if (firstNum == "") {
      firstNum = input.value;
      input.value = "";
      operator = "-";
    } else {
      secondNum = input.value;
      result = parseFloat(firstNum) - parseFloat(secondNum);

      showResult();
      
      firstNum = "";
      secondNum = "";
      operator = "";
    }
  }
}

function btnTimes__Event() {
  if (input.value !== "") {
    if (firstNum == "") {
      firstNum = input.value;
      input.value = "";
      operator = "*";
    } else {
      secondNum = input.value;
      result = parseFloat(firstNum) * parseFloat(secondNum);
      
      showResult();
      
      firstNum = "";
      secondNum = "";
      operator = "";
    }
  }
}

function btnSplit__Event() {
  if (input.value !== "") {
    if (firstNum == "") {
      firstNum = input.value;
      input.value = "";
      operator = "/";
    } else {
      secondNum = input.value;
      result = parseFloat(firstNum) / parseFloat(secondNum);
      
      showResult();
      
      firstNum = "";
      secondNum = "";
      operator = "";
    }
  }
}

function btnPercent__Event() {
  if (input.value !== "") {
    if (firstNum == "") {
      firstNum = input.value;
      input.value = "";
      operator = "%";
    } else {
      secondNum = input.value;
      result = (parseFloat(firstNum) * parseFloat(secondNum)) / 100;
      
      showResult();
      
      firstNum = "";
      secondNum = "";
      operator = "";
    }
  }
}

btnBackspace.addEventListener("click", btnBackspace__Event);
btnPlus.addEventListener("click", btnPlus__Event);
btnMinus.addEventListener("click", btnMinus__Event);
btnTimes.addEventListener("click", btnTimes__Event);
btnSplit.addEventListener("click", btnSplit__Event);
btnPercent.addEventListener("click", btnPercent__Event);

function btnEquals__Event() {
  if (operator != "" && input.value != "") {
    console.log(operator);
    switch (operator) {
      case "+":
        btnPlus__Event();
        operator = "";
        break;
      case "-":
        btnMinus__Event();
        operator = "";
        break;
      case "*":
        btnTimes__Event();
        operator = "";
        break;
      case "/":
        btnSplit__Event();
        operator = "";
        break;
      case "%":
        btnPercent__Event();
        operator = "";
        break;
    }
  }
}

btnEquals.addEventListener("click", btnEquals__Event);

function btnClear__Event() {
  firstNum = "";
  secondNum = "";
  result = "";
  operator = "";
  input.value = "";
}

btnClear.addEventListener("click", btnClear__Event);

function showResult() {
  input.value = Number(result.toFixed(6));
}


