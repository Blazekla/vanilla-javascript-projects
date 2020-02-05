const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
// getRandomUser();
// getRandomUser();

//Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);

  updateDOM();
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);
}

//Update DOM with fetched data
function updateDOM(providedData = data) {
  //Clear main div

  main.innerHTML = "<h2><strong>Perseon</strong> Wealth</h2>";

  providedData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
    // console.log(main.innerHTML);
  });
}

//Format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

//Double money function
function doubleMoney() {
  data = data.map(item => {
    return {
      ...item,
      money: item.money * 2
    };
  });

  updateDOM();
}

//Show millionaires fuction
function showMillionaires() {
  data = data.filter(item => {
    return item.money > 1000000;
  });

  updateDOM();
}

//Calculate Wealth function
function calculateWealth() {
  const reducer = (acc, item) => {
    console.log(`acc: ${acc}`);
    return acc + item.money;
  };
  const total = data.reduce(reducer, 0);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    total
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

//Event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
