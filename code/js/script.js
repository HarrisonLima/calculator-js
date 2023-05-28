var input = document.getElementById("operation");
var buttons = document.querySelectorAll(".btn");
var btnBackspace = document.getElementById("btnBackspace");
var btnHistoric = document.getElementById("btnHistoric");
var btnClose = document.getElementById("btnClose");
var btnConfirmClear = document.getElementById("btnConfirmClear");
var btnTrashHistoric = document.getElementById("btnTrashHistoric");
var btnConfirmClear = document.getElementById("btnConfirmClear");
var btnOkOnly = document.getElementById("btnOkOnly");
var iconModalHistoric = document.getElementById("iconModalHistoric");
var iconModalHistoricEmpty = document.getElementById("iconModalHistoricEmpty");
var iconModalCleaningConfirmed = document.getElementById("iconModalCleaningConfirmed");
var listHistoric = document.getElementById("listHistoric");
var historic = document.getElementById("historic");
var calculatorHistoricActions = document.getElementById(
  "calculatorHistoricActions"
);
var modalHistoric = document.getElementById("modalHistoric");
var modalHistoricEmpty = document.getElementById("modalHistoricEmpty");
var modalCleaningConfirmed = document.getElementById("modalCleaningConfirmed");
var operators = ["+", "-", "*", "/", "%"];
var arrayHistoric = [];
var expression;
var firstNum = "",
  secondNum = "",
  operator = "",
  result;
var previewFirstNum, previewSecondNum, previewResult;
var divShowOperation = document.createElement("div");
var showOperation = document.createElement("p");

historic.style.display = "none";
btnTrashHistoric.style.display = "none";
modalHistoric.style.display = "none";
modalHistoricEmpty.style.display = "none";
modalCleaningConfirmed.style.display = "none";

divShowOperation.appendChild(showOperation);
divShowOperation.style.display = "flex";
divShowOperation.style.justifyContent = "end";

showOperation.setAttribute("id", "showOperation");
showOperation.style.color = "#ff9100  ";
showOperation.style.fontSize = "18px";
showOperation.style.height = "25px";
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

btnHistoric.addEventListener("click", function () {
  if (historic.style.display === "none") {
    historic.style.display = "block";
    btnTrashHistoric.style.display = "block";
    calculatorHistoricActions.style.marginRight = "45px";
  } else {
    historic.style.display = "none";
    btnTrashHistoric.style.display = "none";
    modalHistoric.style.display = "none";
    modalHistoricEmpty.style.display = "none";
    modalCleaningConfirmed.style.display = "none";
    calculatorHistoricActions.style.marginRight = "80px";
  }
});

btnTrashHistoric.addEventListener("click", function () {
  if (arrayHistoric.length > 0) {
    modalHistoric.style.display = "block";
  } else if (arrayHistoric.length == 0) {
    modalHistoricEmpty.style.display = "block";
  }
});

btnConfirmClear.addEventListener("click", function (){
  arrayHistoric = [];
  modalCleaningConfirmed.style.display = "block";
  listHistoric.innerHTML = "";
})

btnClose.addEventListener("click", closeModals);
btnConfirmClear.addEventListener("click", closeModals);
btnOkOnly.addEventListener("click", closeModals);
iconModalHistoric.addEventListener("click", closeModals);
iconModalHistoricEmpty.addEventListener("click", closeModals);
iconModalCleaningConfirmed.addEventListener("click", closeModals);

function closeModals() {
  if (modalHistoric.style.display === "block") {
    modalHistoric.style.display = "none";
  } else if (modalHistoricEmpty.style.display === "block") {
    modalHistoricEmpty.style.display = "none";
  } else if (modalCleaningConfirmed.style.display === "block") {
    modalCleaningConfirmed.style.display = "none";
  }
}

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

  if (input.value.length >= 20 && key !== "Backspace") {
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

    console.log(previewResult.toLocaleString().length);
    if (
      previewResult.toLocaleString().length >= 45 &&
      previewResult.toLocaleString().length < 50
    ) {
      divShowOperation.style.marginRight = "45px";
    } else if (previewResult.toLocaleString().length >= 50) {
      divShowOperation.style.marginRight = "35px";
    } else {
      divShowOperation.style.marginRight = "80px";
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

  updateHistoric();

  firstNum = "";
  operator = "";
}

function updateHistoric() {
  let hasLongExpression = false;

  expression = `${parseFloat(firstNum)} ${operator} ${parseFloat(
    secondNum
  )} = ${result.toLocaleString()}`;
  arrayHistoric.push(expression);

  listHistoric.innerHTML = "";

  arrayHistoric.forEach(function (expression) {
    var paragraph = document.createElement("p");
    paragraph.textContent = expression;
    listHistoric.appendChild(paragraph);

    if (arrayHistoric.length > 14) {
      listHistoric.style.overflowY = "scroll";
    }
    if (expression.length > 80) {
      historic.style.width = "850px";
    } else if (expression.length > 50 && expression.length <= 80) {
      historic.style.width = "550px";
    } else if (expression.length > 25 && expression.length <= 50)
      historic.style.width = "450px";
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
