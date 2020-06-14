const PLAYER = "player";
let footballClub = new FootballClub("Ha Noi");
footballClub.getInit();
footballClub.data = loadData();

function display(table) {
    document.getElementById('display').innerHTML = table;
    saveData();
}

display(footballClub.getHtmlFC());

function addPlayer() {
    let img = document.getElementById('player-img').value;
    let name = document.getElementById('player-name').value;
    let age = document.getElementById('player-age').value;
    let position = document.getElementById('player-position').value;
    let country = document.getElementById('player-country').value;
    let transferPrice = document.getElementById('player-transferPrice').value;
    let player = new Player(img, name, age, position, country, transferPrice);
    footballClub.addPlayers(player);
    display(footballClub.getHtmlFC());
    document.getElementById('form-add').reset();
}

let img1 = document.getElementById('edit-img');
let name1 = document.getElementById('edit-name');
let age1 = document.getElementById('edit-age');
let position1 = document.getElementById('edit-position');
let country1 = document.getElementById('edit-country');
let transferPrice1 = document.getElementById('edit-transferPrice');
let countId = 0;

function edit(id) {
    document.getElementById('form-edit').style.display = "inline-block";
    let player1 = footballClub.getPlayerByID(id);
    img1.value = player1.img;
    name1.value = player1.name;
    age1.value = player1.age;
    position1.value = player1.position;
    country1.value = player1.country;
    transferPrice1.value = player1.transferPrice;
    countId = id;
}

function editPlayer() {
    let img = img1.value;
    let name = name1.value;
    let age = age1.value;
    let position = position1.value;
    let country = country1.value;
    let transferPrice = transferPrice1.value;
    footballClub.players[countId].edit(img, name, age, position, country, transferPrice);
    display(footballClub.getHtmlFC());
    document.getElementById('form-edit').reset();
    document.getElementById('form-edit').style.display = "none";
}

function del(id) {
    footballClub.deletePlayer(id);
    display(footballClub.getHtmlFC());
}

function saveData() {
    localStorage.setItem(PLAYER, JSON.stringify(footballClub.players));
}

function loadData() {
    return localStorage.hasOwnProperty(PLAYER) ? JSON.parse(localStorage.getItem(PLAYER)) : [];
}