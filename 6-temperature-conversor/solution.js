let inputTempSource;
while (inputTempSource !== `c` && inputTempSource !== `f`) {
  inputTempSource = prompt(
    `Please type in a temperatur source.\nValid options are "c" or "f".\nUse a period as a decimal seperator.`
  );
  if (inputTempSource !== `c` && inputTempSource !== `f`) {
    alert(`No valid temperatur source.\nMust be "c" or "f".`);
  }
}
let inputTemp = prompt(`Please type in a Temperatur you want to convert.`);
if (Number.isNaN(inputTemp) === true) {
  alert(`Not a valid number.`);
} else if (inputTempSource === `c`) {
  inputTemp = inputTemp * (9 / 5) + 32;
  alert(`${inputTemp} °f`);
} else {
  inputTemp = (inputTemp - 32) * (5 / 9);
  alert(`${inputTemp} °c`);
}

//inputTempSource = inputTempSource.toLowerCase();
