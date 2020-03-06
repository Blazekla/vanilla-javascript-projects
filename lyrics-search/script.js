const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

//Search by song or artist
async function searchSongs(term) {
  const result = await fetch(`${apiURL}/suggest/${term}`);
  const data = await result.json();

  showData(data);
}

//Show song and artist in DOM
function showData(data) {}

//Event Listener
form.addEventListener("submit", e => {
  e.preventDefault();
  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});
