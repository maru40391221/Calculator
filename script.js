const numbers = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
const operatorButtons = document.querySelectorAll(".operator");
const point = document.querySelector(".point");
const enterAndClear = document.querySelector(".enter");

let display = [];

// displaying numbers;

numbers.forEach((number) => {
  number.addEventListener("click", function(){
      display.push(number.value);
      screen.textContent = display.join('');
  });
});

// displaying a point
point.addEventListener("click", function() {

  // If 'display' is empty, prepend '0' to '.'
  if (display.length === 0){
    display.push("0");
    display.push(point.value);
    screen.textContent = display.join('');
  }
  // If display does not yet include '.', add '.'
  else if (!display.includes(".")) {
    display.push(point.value);
    screen.textContent = display.join('');
  } 
});

// calculation

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


// *************************enter/clear*************************
let pressTimer;

enterAndClear.addEventListener('mousedown', function() {
  // Clear any existing timeout to start fresh
  clearTimeout(pressTimer);
  
  // Set timeout to run function after 3 seconds
  pressTimer = setTimeout(function() {
    // Change the background color
    enterAndClear.style.backgroundColor = "rgba(75, 63, 243, 0.845)";
    screen.textContent = "";
    display= [];
  }, 500);

})


enterAndClear.addEventListener('mouseup', function() {
  // Clear the timeout if the button is released before 3 seconds
  clearTimeout(pressTimer);

  pressTimer = setTimeout(function() {
    // Change the background color
    enterAndClear.style.backgroundColor = "rgba(255, 0, 0, 0.845)"; // Change this color as you wish
  }, 250);
})

// **************************************************