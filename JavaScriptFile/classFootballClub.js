class FootballClub {
    constructor(name) {
        this.name = name;
        this.players = [];
        this.dataPlayer = [];
    }

    getInit() {
        for (let i = 0; i < this.dataPlayer.length; i++) {
            let player = new Player(this.dataPlayer[i].img, this.dataPlayer[i].name, this.dataPlayer[i].age,
                this.dataPlayer[i].position, this.dataPlayer[i].country, this.dataPlayer[i].transferPrice);
            this.AddPlayer(player);
        }

    }

    AddPlayer(player) {
        this.players.push(player);
    }

    editPlayer(player, img, name, age, position, country, transferPrice) {
        player.edit(img, name, age, position, country, transferPrice);
    }

    deletePlayer(id) {
        this.players.splice(id, 1)
    }

    getPlayerByID(id) {
        return this.players[id];
    }
}
