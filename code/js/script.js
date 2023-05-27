// var btnClear = document.getElementById("btnClear");
// var btnBackspace = document.getElementById("btnBackspace");
// var btnEquals = document.getElementById("btnEquals");
// var btnMinus = document.getElementById("btnMinus");
// var btnPlus = document.getElementById("btnPlus");
// var btnSplit = document.getElementById("btnSplit");
// var btnTimes = document.getElementById("btnTimes");
// var btnPercent = document.getElementById("btnPercent");
// var btnPoint = document.getElementById("btnPoint");

// var input = document.getElementById("operation");
// var firstNum = "";
// var secondNum = "";
// var operator = "";
// var result = "";
// var expression, result, previewFirstNum, previewSecondNum, previewResult;

// var divShowOperation = document.createElement("div");
// var showOperation = document.createElement("p");

// divShowOperation.appendChild(showOperation);

// divShowOperation.style.display = "flex";
// divShowOperation.style.justifyContent = "end";
// divShowOperation.style.marginRight = "80px";

// showOperation.setAttribute("id", "showOperation");
// showOperation.style.color = "#ff9100  ";
// showOperation.style.fontSize = "18px";
// showOperation.style.marginTop = "20px";
// showOperation.style.marginBottom = "5px";

// input.parentNode.insertBefore(divShowOperation, input);

// var buttons = [];

// for (var i = 0; i < 10; i++) {
//   var btn = document.getElementById("btn" + i);
//   buttons.push(btn);
//   btn.addEventListener("click", btnClickEvent);
// }

// input.parentNode.insertBefore(divShowOperation, input);

// function btnClickEvent() {
//   input.value += this.textContent;
//   updatePreview();
// }

// function sanitizeInput(value) {
//   var sanitizedValue = value.replace(/[^0-9.]/g, "");
//   var decimalCount = sanitizedValue.split(".").length - 1;

//   if (decimalCount > 1) {
//     sanitizedValue = sanitizedValue.replace(/\./g, "");
//   }

//   return sanitizedValue;
// }

// function isValidOperator(operator) {
//   var operators = ["+", "-", "*", "/", "="];
//   return operators.includes(operator);
// }

// function updatePreview() {
//   if (firstNum !== "") {
//     previewSecondNum = input.value;
//     switch (operator) {
//       case "+":
//         previewResult =
//           parseFloat(previewFirstNum) + parseFloat(previewSecondNum);
//         showOperation.textContent = `= ${previewResult}`;
//         console.log(previewResult);
//         break;
//       case "-":
//         previewResult =
//           parseFloat(previewFirstNum) - parseFloat(previewSecondNum);
//         showOperation.textContent = `= ${previewResult}`;
//         console.log(previewResult);
//         break;
//       case "*":
//         previewResult =
//           parseFloat(previewFirstNum) * parseFloat(previewSecondNum);
//         showOperation.textContent = `= ${previewResult}`;
//         console.log(previewResult);
//         break;
//       case "/":
//         previewResult =
//           parseFloat(previewFirstNum) / parseFloat(previewSecondNum);
//         showOperation.textContent = `= ${previewResult}`;
//         console.log(previewResult);
//         break;
//       case "%":
//         previewResult =
//           (parseFloat(previewFirstNum) * parseFloat(previewSecondNum)) / 100;
//         showOperation.textContent = `= ${previewResult}`;
//         console.log(previewResult);
//         break;
//     }
//   }
// }

// input.addEventListener("keyup", function (event) {
//   var inputValue = event.target.value;
//   var sanitizedValue = sanitizeInput(inputValue);
//   event.target.value = sanitizedValue;

//   updatePreview();
// });

// input.addEventListener("keydown", function (event) {
//   var key = event.key;

//   function isNumeric(value) {
//     return /^\d+$/.test(value);
//   }

//   if (
//     !isNumeric(key) &&
//     !isValidOperator(key) &&
//     key !== "." &&
//     key !== "Backspace"
//   ) {
//     event.preventDefault();
//   }

//   if (input.value.includes(".") && key === ".") {
//     event.preventDefault();
//   }

//   if (input.value.length >= 25 && key !== "Backspace") {
//     event.preventDefault();
//   }
// });

// function btnBackspace__Event() {
//   input.value = input.value.slice(0, -1);
// }

// function btnPlus__Event() {
//   if (input.value !== "") {
//     if (firstNum == "" && operator == "") {
//       firstNum = input.value;
//       previewFirstNum = firstNum;
//       operator = "+";

//       input.value = "";
//     } else {
//       secondNum = input.value;
//       result = parseFloat(firstNum) + parseFloat(secondNum);

//       showResult();

//       firstNum = "";
//       secondNum = "";
//       operator = "";
//     }
//   }
// }

// function btnMinus__Event() {
//   if (input.value !== "") {
//     if (firstNum == "") {
//       firstNum = input.value;
//       previewFirstNum = firstNum;
//       operator = "-";

//       input.value = "";
//     } else {
//       secondNum = input.value;
//       result = parseFloat(firstNum) - parseFloat(secondNum);

//       showResult();

//       firstNum = "";
//       secondNum = "";
//       operator = "";
//     }
//   }
// }

// function btnTimes__Event() {
//   if (input.value !== "") {
//     if (firstNum == "") {
//       firstNum = input.value;
//       previewFirstNum = firstNum;
//       operator = "*";

//       input.value = "";
//     } else {
//       secondNum = input.value;
//       result = parseFloat(firstNum) * parseFloat(secondNum);

//       showResult();

//       firstNum = "";
//       secondNum = "";
//       operator = "";
//     }
//   }
// }

// function btnSplit__Event() {
//   if (input.value !== "") {
//     if (firstNum == "") {
//       firstNum = input.value;
//       previewFirstNum = firstNum;
//       operator = "/";

//       input.value = "";
//     } else {
//       secondNum = input.value;
//       result = parseFloat(firstNum) / parseFloat(secondNum);

//       showResult();

//       firstNum = "";
//       secondNum = "";
//       operator = "";
//     }
//   }
// }

// function btnPercent__Event() {
//   if (input.value !== "") {
//     if (firstNum == "") {
//       firstNum = input.value;
//       previewFirstNum = firstNum;
//       operator = "%";

//       input.value = "";
//     } else {
//       secondNum = input.value;
//       result = (parseFloat(firstNum) * parseFloat(secondNum)) / 100;

//       showResult();

//       firstNum = "";
//       secondNum = "";
//       operator = "";
//     }
//   }
// }

// function btnEquals__Event() {
//   if (operator != "" && input.value != "") {
//     switch (operator) {
//       case "+":
//         btnPlus__Event();
//         operator = "";
//         break;
//       case "-":
//         btnMinus__Event();
//         operator = "";
//         break;
//       case "*":
//         btnTimes__Event();
//         operator = "";
//         break;
//       case "/":
//         btnSplit__Event();
//         operator = "";
//         break;
//       case "%":
//         btnPercent__Event();
//         operator = "";
//         break;
//     }
//   }
// }

// function btnClear__Event() {
//   firstNum = "";
//   secondNum = "";
//   result = "";
//   operator = "";
//   input.value = "";
//   previewFirstNum = "";
//   previewSecondNum = "";
//   previewResult = "";
//   previewResult = "";
//   showOperation.textContent = "";
// }

// btnBackspace.addEventListener("click", btnBackspace__Event);
// btnPlus.addEventListener("click", btnPlus__Event);
// btnMinus.addEventListener("click", btnMinus__Event);
// btnTimes.addEventListener("click", btnTimes__Event);
// btnSplit.addEventListener("click", btnSplit__Event);
// btnPercent.addEventListener("click", btnPercent__Event);
// btnEquals.addEventListener("click", btnEquals__Event);
// btnClear.addEventListener("click", btnClear__Event);

// function showResult() {
//   input.value = Number(result.toFixed(6));
// }

var input = document.getElementById("operation");
var buttons = document.querySelectorAll(".btn");
var operators = ["+", "-", "*", "/", "%"];
var firstNum = "";
var operator = "";
var previewFirstNum, previewSecondNum, previewResult;
var btnBackspace = document.getElementById("btnBackspace");
var divShowOperation = document.createElement("div");
var showOperation = document.createElement("p");
var result;

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
      if (firstNum !== "" && input.value !== "") {
        calcResult();
        showOperation.textContent = "";
      }
      showOperation.textContent = "";
    } else if (value === ".") {
      if (input.value === "" || input.value.includes(".")) {
        return;
      } else {
        input.value += value;
      }
    } else if (operators.includes(value)) {
      if (firstNum !== "" && input.value !== "") {
        calcResult();
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
    } else {
      input.value += value;

      if (firstNum !== "") {
        updatePreview();
      }
    }
  });
});

btnBackspace.addEventListener("click", function () {
  if (input.value === "-") {
    input.value = "";
  } else {
    input.value = input.value.slice(0, -1);
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
      operator = key;
      previewOperator = operator;
      calcResult();
      
      firstNum = result;
      previewFirstNum = firstNum;
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
  var secondNum = input.value;

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

  firstNum = "";
  operator = "";
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
