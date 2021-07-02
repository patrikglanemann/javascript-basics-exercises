let inputOperator;

while (inputOperator !== `exit` && inputOperator !== ``) {
  inputOperator = prompt(
    `Please type in an operator.\nValid operators are +, -, *, / and %.\nType "exit" to exit program.`
  );
  if (inputOperator === `exit` || !inputOperator) {
    alert("You exited the program.");
  } else {
    let firstNumber = Number(prompt(`Please type in first number.`));
    let secondNumber = Number(prompt(`Please type in second number.`));

    if (inputOperator === `+`) {
      alert(firstNumber + secondNumber);
    } else if (inputOperator === `-`) {
      alert(firstNumber - secondNumber);
    } else if (inputOperator === `*`) {
      alert(firstNumber * secondNumber);
    } else if (inputOperator === `/`) {
      alert(firstNumber / secondNumber);
    } else if (inputOperator === `%`) {
      alert(firstNumber % secondNumber);
    } else {
      alert(`Pleae type in a valid operator.`);
    }
  }
}

/*
switch (inputOperator) {
  case "+":
    alert(firstNumber + secondNumber);
    break;
  case "-":
    alert(firstNumber - secondNumber);
    break;
  case "*":
    alert(firstNumber * secondNumber);
    break;
}
*/
