let FootballClub = new FootballClub("U23 Viet Nam");
FootballClub.getInit();

function display(table) {
    document.getElementById('display').innerHTML = table;
}

display(FootballClub.getHtmlFC());

function addPlayer() {
    let img = document.getElementById('player-img').value;
    let name = document.getElementById('player-name').value;
    let age = document.getElementById('player-age').value;
    let position = document.getElementById('player-position').value;
    let country = document.getElementById('player-country').value;
    let transferPrice = document.getElementById('player-transferPrice').value;
    let player = new Player(img, name, age, position, country, transferPrice);
    FootballClub.AddPlayer(player);
    display(FootballClub.getHtmlFC());
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
    let player = FootballClub.getPlayerByID(id);
    img1.value = player.img;
    name1.value = player.name;
    age1.value = player.age;
    position1.value = player.position;
    country1.value = player.country;
    transferPrice1.value = player.transferPrice;
    countId = id;
}
