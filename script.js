const searchInput = document.getElementById('searchInput');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const rangeDisplay = document.querySelector('#rangeDisplay');

let sortMethod = true;
let entries = [];

async function fetchAnime() {
    const searchInput = searchInput.value;
    const response = await fetch(`https://api.jikan.moe/v4/anime`);
    const data = await response.json();
    return data.results;
}
