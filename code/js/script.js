var input = document.getElementById("operation");
var buttons = document.querySelectorAll(".btn");
var btnBackspace = document.getElementById("btnBackspace");
var operators = ["+", "-", "*", "/", "%"];

var firstNum = "",
  secondNum = "",
  operator = "",
  result;
var previewFirstNum, previewSecondNum, previewResult;

var divShowOperation = document.createElement("div");
var showOperation = document.createElement("p");

var listHistoric = document.getElementById("listHistoric");
var historic = [];
var expression;

divShowOperation.appendChild(showOperation);

divShowOperation.style.display = "flex";
divShowOperation.style.justifyContent = "end";
divShowOperation.style.marginRight = "80px";

showOperation.setAttribute("id", "showOperation");
showOperation.style.color = "#ff9100  ";
showOperation.style.fontSize = "18px";
showOperation.style.marginTop = "20px";
showOperation.style.marginBottom = "5px";

input.parentNode.insertBefore(divShowOperation, input);

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var value = this.textContent;

    if (value === "=") {
      this.style.background = "#141414";
      this.style.color = "#ff9100";
      setTimeout(function () {
        btn.style.background = "";
        btn.style.color = "";
      }, 100);

      if (firstNum !== "" && input.value !== "") {
        calcResult();
        showOperation.textContent = "";
      }
      showOperation.textContent = "";
    } else if (value === ".") {
      this.style.background = "#4e4e4e";

      setTimeout(function () {
        btn.style.background = "";
      }, 100);
      if (input.value === "" || input.value.includes(".")) {
      } else {
        input.value += value;
      }
    } else if (operators.includes(value)) {
      this.style.background = "#4e4e4e";

      setTimeout(function () {
        btn.style.background = "";
      }, 100);

      if (firstNum !== "" && input.value !== "") {
        operator = value;
        previewOperator = operator;
        calcResult();

        console.log(result);
        firstNum = result;
        previewFirstNum = firstNum;
        input.value = "";
      } else if (value === "-" && input.value === "") {
        input.value += value;
      } else {
        firstNum = input.value;
        operator = value;
        previewFirstNum = firstNum;
        previewOperator = operator;
        input.value = "";
      }
    } else if (value === "C") {
      clearAll();
      this.style.background = "#ff9100";
      this.style.color = "#ffffff";
      setTimeout(function () {
        btn.style.background = "";
        btn.style.color = "";
      }, 100);
    } else {
      input.value += value;
      this.style.background = "#4e4e4e";

      setTimeout(function () {
        btn.style.background = "";
      }, 100);
      if (firstNum !== "") {
        updatePreview();
      }
    }
  });
});

btnBackspace.addEventListener("click", function () {
  if (input.value === "-") {
    input.value = "";
    this.style.background = "#ff9100";
    this.style.color = "#ffffff";
    setTimeout(function () {
      btnBackspace.style.background = "";
      btnBackspace.style.color = "";
    }, 100);
  } else {
    input.value = input.value.slice(0, -1);
    this.style.background = "#ff9100";
    this.style.color = "#ffffff";
    setTimeout(function () {
      btnBackspace.style.background = "";
      btnBackspace.style.color = "";
    }, 100);
  }

  if (firstNum === "") {
    showOperation.textContent = "";
  } else {
    updatePreview();
  }
});

function sanitizeInput(value) {
  var sanitizedValue = value.replace(/[^0-9.]/g, "");
  var decimalCount = sanitizedValue.split(".").length - 1;

  if (decimalCount > 1) {
    sanitizedValue = sanitizedValue.replace(/\./g, "");
  }

  return sanitizedValue;
}

input.addEventListener("keydown", function (event) {
  var key = event.key;

  if (operators.includes(key) && input.value !== "") {
    if (firstNum === "") {
      firstNum = input.value;
      operator = key;
      previewFirstNum = firstNum;
      previewOperator = operator;
      input.value = "";
    } else if (firstNum !== "" && input.value !== "") {
      calcResult();
      firstNum = result;
      operator = key;
      previewFirstNum = firstNum;
      previewOperator = operator;
      input.value = "";
    }
  }

  if (key === "=") {
    if (firstNum !== "" && input.value !== "") {
      calcResult();
      showOperation.textContent = "";
    }
    showOperation.textContent = "";
  }

  if (
    !isNumeric(key) &&
    !operators.includes(key) &&
    key !== "=" &&
    key !== "." &&
    key !== "Backspace"
  ) {
    event.preventDefault();
  }

  if (input.value.includes(".") && key === ".") {
    event.preventDefault();
  }

  if (input.value.length >= 25 && key !== "Backspace") {
    event.preventDefault();
  }

  if (key === "Backspace" && firstNum === "") {
    showOperation.textContent = "";
  }
});

input.addEventListener("keyup", function (event) {
  var inputValue = event.target.value;
  var sanitizedValue = sanitizeInput(inputValue);
  event.target.value = sanitizedValue;

  updatePreview();
});

function isNumeric(value) {
  return /^\d+$/.test(value);
}

function updatePreview() {
  if (input.value !== "" && firstNum !== "") {
    previewSecondNum = input.value;
    switch (previewOperator) {
      case "+":
        previewResult =
          parseFloat(previewFirstNum) + parseFloat(previewSecondNum);
        break;
      case "-":
        previewResult =
          parseFloat(previewFirstNum) - parseFloat(previewSecondNum);
        break;
      case "*":
        previewResult =
          parseFloat(previewFirstNum) * parseFloat(previewSecondNum);
        break;
      case "/":
        previewResult =
          parseFloat(previewFirstNum) / parseFloat(previewSecondNum);
        break;
      case "%":
        previewResult =
          (parseFloat(previewFirstNum) * parseFloat(previewSecondNum)) / 100;
        break;
    }
    showOperation.textContent = `= ${previewResult.toLocaleString()}`;
  } else {
    showOperation.textContent !== "";
  }
}

function calcResult() {
  secondNum = input.value;
  switch (operator) {
    case "+":
      result = parseFloat(firstNum) + parseFloat(secondNum);
      break;
    case "-":
      result = parseFloat(firstNum) - parseFloat(secondNum);
      break;
    case "*":
      result = parseFloat(firstNum) * parseFloat(secondNum);
      break;
    case "/":
      result = parseFloat(firstNum) / parseFloat(secondNum);
      break;
    case "%":
      result = parseFloat(firstNum) % parseFloat(secondNum);
      break;
  }
  input.value = result.toLocaleString();

  // expression = `${parseFloat(firstNum)} ${operator} ${parseFloat(
  //   secondNum
  // )} = ${result}`;
  // historic.push(expression);
  updateHistoric();

  firstNum = "";
  operator = "";
}

function updateHistoric() {
  expression = `${parseFloat(firstNum)} ${operator} ${parseFloat(
    secondNum
  )} = ${result.toLocaleString()}`;
  historic.push(expression);

  listHistoric.innerHTML = "";

  historic.forEach(function (expression) {
    var paragraph = document.createElement("p");
    paragraph.textContent = expression;
    listHistoric.appendChild(paragraph);
  });
}

function clearAll() {
  firstNum = "";
  input.value = "";
  operator = "";
  previewFirstNum = "";
  previewSecondNum = "";
  previewResult = "";
  previewOperator = "";
  showOperation.textContent = "";
}
