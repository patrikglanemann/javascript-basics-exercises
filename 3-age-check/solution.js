const myAge = 30;

//Greeting
alert(`Hello, thank you for visiting`);

//Ask for name
const userName = prompt(`What is your name`);
//Ask for year of birth
let userBirth = 2021;

//defaukt also possible like prompt("Text Here", 2021);
/*if(yearOfBirth.length === 0 H yearOfBirth === null)
{yearOfBirth = 2021;} 
if (!yearOfBirth)
{yearOfBirth = 2021;}*/

do {
  userBirth = prompt(`What is your year of birth?`);
  //Convert to number
  userBirth = Number(userBirth);
  //Check if year of birth is a number
} while (Number.isNaN(userBirth));

//Calculate age
const userAge = 2021 - userBirth;

//10 or younger
if (userAge <= 10) {
  alert(
    `You are too young for this ${userName}. Come back when you are older.`
  );
  //younger than 18
} else if (userAge < 18) {
  let confirm = window.confirm(`Are you next to an adult?`);
  if (confirm === true) {
    alert(
      `Welcome to my super website ${userName}. Good, that you are not alone here!`
    );
  } else {
    alert(
      `You are too young for this ${userName}. You need an adult next to you to continue.`
    );
  }
  //MY age
} else if (userAge === myAge) {
  alert(`Welcome to my super website ${userName}. We are the same age!`);
  //over 18
} else if (userAge >= 18) {
  alert(`Welcome to my super website ${userName}`);
}
