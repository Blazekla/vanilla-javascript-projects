//DOM elements
const resultEL = document.getElementById("result");
const lengthEL = document.getElementById("length");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEL = document.getElementById("lowercase");
const numbersEL = document.getElementById("numbers");
const symbolsEL = document.getElementById("symbols");
const generateEL = document.getElementById("generate");
const clipboardEL = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//Event listeners
generateEL.addEventListener("click", () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;

  resultEL.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//Copy password to clipboard
clipboardEL.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = resultEL.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard!");
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  console.log("typesCount: " + typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  console.log(typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log("funcName: " + funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

//Generator functions
function getRandomLower() {
  const random = Math.floor(Math.random() * 26) + 97;
  return String.fromCharCode(random);
}

function getRandomUpper() {
  const random = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(random);
}
function getRandomNumber() {
  const random = Math.floor(Math.random() * 10) + 48;
  return String.fromCharCode(random);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  const random = Math.floor(Math.random() * symbols.length);
  return symbols[random];
}

console.log(`lower: ${getRandomLower()}`);
console.log(`Upper: ${getRandomUpper()}`);
console.log(`number: ${getRandomNumber()}`);
console.log(`symbols: ${getRandomSymbol()}`);
