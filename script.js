const numbers = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
const operators = document.querySelectorAll(".operator");
const point = document.querySelector(".point");
const enterAndClear = document.querySelector(".enter");

let display = [];

// ******************* displaying numbers;

numbers.forEach((number) => {
  number.addEventListener("click", function(){
      display.push(number.value);
      screen.textContent = display.join('');
  });
});

// ******************* displaying a point
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

  }  else if (display.some((item) => isNaN(item)&& item !== '.')){
    display.push(point.value);
    screen.textContent = display.join('');
  }

});

// ******************* displaying operators

operators.forEach((operator) => {
  operator.addEventListener("click", function(){
    if (display.length === 0){
      alert("Please type some numbers in");
    }
    else if (display.some((item) => isNaN(item) && item !== '.')){
      alert("one operator at a time");
    } else {
      display.push(operator.value);
      screen.textContent = display.join('');

    }
  });
});


// *******************enter

enterAndClear.addEventListener("click", function(){
  // turn the dispaly array into one string 
  const mathExpression = display.join("");
  // to empty display array
  display = [];
  const calculate = new Function(`return ${mathExpression}`)
  const result = calculate();

  screen.textContent = result.toString();
  display.push(result.toString());

})



// *******************clear function
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

