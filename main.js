calc();

function calc() {
  let op = 0;
  let ans = 0;
  const display = document.querySelector("div.display");
  const buttons = document.querySelectorAll("div.button");

  let input = 0;

  while (true) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        input = event.target.innerHTML;
        calculator(input);
      });
    }
    // // inputValue = parseInt(input);
    // // if(!isNaN(inputValue))
    // // {

    // // }
    // // if(!isNaNparseInt(input))
    // // ← × ÷
    // if (input == "+" || input == "-" || input == "×" || input == "÷") {
    //   ans = parseInt(display.innerHTML);
    //   display.innerHTML = 0;
    //   if (input == "+") {
    //     op = 1;
    //   } else if (input == "-") {
    //     op = 2;
    //   } else if (input == "×") {
    //     op = 3;
    //   } else if (input == "÷") {
    //     op = 4;
    //   }
    // } else if (input == "=") {
    //   if (op == 1) {
    //     ans = ans + parseInt(display.innerHTML);
    //   } else if (op == 2) {
    //     ans = ans - parseInt(display.innerHTML);
    //   } else if (op == 3) {
    //     ans = ans * parseInt(display.innerHTML);
    //   } else if (op == 4) {
    //     ans = ans / parseInt(display.innerHTML);
    //   }
    //   display.innerHTML = ans;
    // } else if (input == "C") {
    //   display.innerHTML = 0;
    //   ans = 0;
    // } else if (input == "←") {
    //   if (display.innerHTML != "0") {
    //     display.innerHTML = display.innerHTML.slice(
    //       0,
    //       display.innerHTML.length - 2
    //     );
    //   }
    // } else {
    //   if (display.innerHTML != "0") {
    //     display.innerHTML += input;
    //   } else {
    //     display.innerHTML = input;
    //   }
    // }
  }
}

function calculator(input) {
  if (input == "+" || input == "-" || input == "×" || input == "÷") {
    ans = parseInt(display.innerHTML);
    display.innerHTML = 0;
    if (input == "+") {
      op = 1;
    } else if (input == "-") {
      op = 2;
    } else if (input == "×") {
      op = 3;
    } else if (input == "÷") {
      op = 4;
    }
  } else if (input == "=") {
    if (op == 1) {
      ans = ans + parseInt(display.innerHTML);
    } else if (op == 2) {
      ans = ans - parseInt(display.innerHTML);
    } else if (op == 3) {
      ans = ans * parseInt(display.innerHTML);
    } else if (op == 4) {
      ans = ans / parseInt(display.innerHTML);
    }
    display.innerHTML = ans;
  } else if (input == "C") {
    display.innerHTML = 0;
    ans = 0;
  } else if (input == "←") {
    if (display.innerHTML != "0") {
      display.innerHTML = display.innerHTML.slice(
        0,
        display.innerHTML.length - 2
      );
    }
  } else {
    if (display.innerHTML != "0") {
      display.innerHTML += input;
    } else {
      display.innerHTML = input;
    }
  }
}
