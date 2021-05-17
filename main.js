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

// numbers.addEventListener("click", (e) => {
//   alert;
//   display.innerHTML = numbers.innerHTML;
// });
let prevValue = "";
let operation = null;
let currentValue = "";
// const updateOutput = (number) => {
//   display.value = number;
// };
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const storeValue = e.target.innerHTML;
    currentValue = currentValue + storeValue;
    console.log(currentValue);
    updateOutput(currentValue);
    // getTotal();
  });
});

clear.addEventListener("click", (e) => {
  currentValue = "";
  prevValue = "";
  operation = null;
  updateOutput(0);
});

// percentage.addEventListener("click", (e) => {
//   updateOutput("%");
// });

multiply.addEventListener("click", (e) => {
  const firstValue = display.value;
  operation = "x";
  prevValue = currentValue;
  currentValue = "";

  // updateOutput(firstValue + operation );
  console.log(display.value);
  // getTotal();

  return;
});

add.addEventListener("click", (e) => {
  const firstValue = display.value;
  operation = "+";
  prevValue = currentValue;
  currentValue = "";

  // updateOutput(firstValue + operation );
  console.log(display.value);
  // getTotal();

  return;
});

divide.addEventListener("click", (e) => {
  const firstValue = display.value;
  operation = "/";
  prevValue = currentValue;
  currentValue = "";

  // updateOutput(firstValue + operation );
  console.log(display.value);
  // getTotal();

  return;
});

minus.addEventListener("click", (e) => {
  const firstValue = display.value;
  operation = "-";
  prevValue = currentValue;
  currentValue = "";

  // updateOutput(firstValue + operation );
  console.log(display.value);
  // getTotal();

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
  // if (operation == "x") {
  //   total = parsecurrentValue * parseprevValue;
  //   return total;
  // } else if (operation == "+") {
  //   total = parsecurrentValue + parseprevValue;
  //   return total;
  // } else if (operation == "/") {
  //   total = parsecurrentValue / parseprevValue;
  //   return total;
  // } else if (operation == "-") {
  //   total = parsecurrentValue - parseprevValue;
  //   return total;
  // }
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
  }

  // else if (operation == "+/-") {
  //   if parsecurrentValue < 0
  //     return parse
  //   total = parsecurrentValue - parseprevValue;
  //   return total;
  // }
  else return NaN;

  // console.log(total);
  // updateOutput(total);
  return total;
};

equal.addEventListener("click", (e) => {
  const total = getTotal();
  updateOutput(total);
  currentValue = total;
  operator = null;
  prevValue = "";
});

const updateOutput = (number) => {
  display.value = number;
};
