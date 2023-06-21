const numbers = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
const operatorButtons = document.querySelectorAll(".operator");
const point = document.querySelector(".point");
const enterAndClear = document.querySelector(".enter");

let display = [];

numbers.forEach((number) => {
  number.addEventListener("click", function(){
      display.push(number.value);
      screen.textContent = display.join('');
  });
});


let firstNum = 10;
let secondNum = 20;
const operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function operate(operatorSymbol, a, b) {
  switch (operatorSymbol) {
    case "+":
      return operator["+"](a, b);
    case "-":
      return operator["-"](a, b);
    case "*":
      return operator["*"](a, b);
    case "/":
      return operator["/"](a, b);
    default:
      return "Invalid operator";
  }
}

console.log(operate("+", firstNum, secondNum));  // Output: 30
console.log(operate("-", firstNum, secondNum));  // Output: -10
console.log(operate("*", firstNum, secondNum));  // Output: 200
console.log(operate("/", firstNum, secondNum));  // Output: 0.5

