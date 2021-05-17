const numbers = document.querySelectorAll(".calculator__buttons__num");
console.log(numbers);
const clear = document.querySelector(".calculator__buttons__op__clear");
const negative = document.querySelector(".calculator__buttons__op__negative");
const percentage = document.querySelector(
  "calculator__buttons__op__percentage"
);
const divide = document.querySelector(".calculator__buttons__op__divide");
const multiply = document.querySelector(".calculator__buttons__op__multiply");
const minus = document.querySelector(".calculator__buttons__op__minus");
const add = document.querySelector(".calculator__buttons__op__add");
const display = document.querySelector(".display");
console.log(display);

// numbers.addEventListener("click", (e) => {
//   alert;
//   display.innerHTML = numbers.innerHTML;
// });
let addMoreValue = "";
const updateOutput = (number) => {
  display.value = number;
};
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const storeValue = e.target.innerHTML;
    addMoreValue = addMoreValue + storeValue;
    updateOutput(addMoreValue);
  });
});

clear.addEventListener("click", (e) => {
  updateOutput(0);
});

// percentage.addEventListener("click", (e) => {
//   updateOutput("%");
// });

multiply.addEventListener("click", (e) => {
  const firstValue = display.value;
  updateOutput(firstValue + "x");
  console.log(display.value);
});
