const numbers = document.querySelectorAll(".calculator__buttons__num");
console.log(numbers);
const clear = document.querySelector(".calculator__buttons__op__clear");
const divide = document.querySelector(".calculator__buttons__op__divide");
const multiply = document.querySelector(".calculator__buttons__op__multiply");
const minus = document.querySelector(".calculator__buttons__op__minus");
const add = document.querySelector(".calculator__buttons__op__add");
const equal = document.querySelector(".calculator__buttons__op__equal");
const display = document.querySelector(".display");
console.log(display);

let prevValue = "";
let currentValue = "";
let operation = null;

const updateOutput = (number) => {
  display.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const storeValue = e.target.innerHTML;
    currentValue = currentValue + storeValue;
    console.log(currentValue);
    updateOutput(currentValue);
  });
});

clear.addEventListener("click", (e) => {
  currentValue = "";
  prevValue = "";
  operation = null;
  updateOutput(0);
});

multiply.addEventListener("click", (e) => {
  operation = "x";
  prevValue = currentValue;
  currentValue = "";
  console.log(display.value);
  return;
});

add.addEventListener("click", (e) => {
  operation = "+";
  prevValue = currentValue;
  currentValue = "";
  console.log(display.value);
  return;
});

divide.addEventListener("click", (e) => {
  operation = "/";
  prevValue = currentValue;
  currentValue = "";
  console.log(display.value);
  return;
});

minus.addEventListener("click", (e) => {
  operation = "-";
  prevValue = currentValue;
  currentValue = "";
  console.log(display.value);
  return;
});

const getTotal = () => {
  if (currentValue === "" || prevValue === "") {
    return;
  }
  const parsecurrentValue = parseFloat(currentValue);
  const parseprevValue = parseFloat(prevValue);
  console.log(parsecurrentValue, parseprevValue);
  let total = 0;

  if (operation == "x") {
    total = parseprevValue * parsecurrentValue;
    return total;
  } else if (operation == "+") {
    total = parseprevValue + parsecurrentValue;
    return total;
  } else if (operation == "/") {
    total = parseprevValue / parsecurrentValue;
    return total;
  } else if (operation == "-") {
    total = parseprevValue - parsecurrentValue;
    return total;
  } else return NaN;
};

equal.addEventListener("click", (e) => {
  const total = getTotal();
  updateOutput(total);
  currentValue = total;
  operator = null;
  prevValue = "";
});
