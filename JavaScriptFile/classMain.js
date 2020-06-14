let FootballClub = new FootballClub("U23 Viet Nam");
FootballClub.getInit();
function display(table) {
    document.getElementById('display').innerHTML = table;
}
display(FootballClub.getHtmlFC());
