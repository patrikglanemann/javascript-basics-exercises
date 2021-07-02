let sum = 1;
let inputNumber;
do {
  inputNumber = prompt(`Please put in a number.`);
  //Convert to number
  inputNumber = Number(inputNumber);
  //Check if year of birth is a number
} while (Number.isNaN(inputNumber));

if (inputNumber < 0) {
  alert("The given number is negative, can not calculate sumatory.");
} else {
  for (let i = 0; i <= inputNumber; i++) {
    sum = sum + i;
  }

  alert(`${sum}`);
}
