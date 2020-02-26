const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zucherberg",
  "Michael Bloomberg",
  "Larry Page"
];

//Store list items
const listItems = [];

let dragStartIndex;

createList();

//comparison
// const numbers = [1, 3, 110, 40, 302];
// console.log(
//   "sorting numbers: " +
//     numbers.sort(
//       (a, b) => {
//         console.log("result function: " + (a - b));
//         return a - b;
//       }
//       //   function(a, b) {
//       //   console.log("result function: " + (a - b));
//       //   return a - b;
//       // }
//     )
// );

//Insert list items into DOM

function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      // console.log(person);
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>`;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
