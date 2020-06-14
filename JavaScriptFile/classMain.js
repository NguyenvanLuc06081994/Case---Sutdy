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