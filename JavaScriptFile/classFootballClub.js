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
            this.addPlayers(player);
        }

    }

    addPlayers(player) {
        this.players.push(player);
    }

    editPlayers(player, img, name, age, position, country, transferPrice) {
        player.edit(img, name, age, position, country, transferPrice);
    }

    deletePlayer(id) {
        this.players.splice(id, 1)
    }

    getPlayerByID(id) {
        return this.players[id];
    }

    getHtmlFC() {
        let table = `<table border="0px solid black" cellspacing="0" class="table table-striped">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Country</th>
                        <th>Transfer Price</th>
                    </tr>`;
        for (let i = 0; i < this.players.length; i++) {
            table += "<tr>" + this.players[i].getHtmlPlayer() + this.getButton(i) + '</tr>';
        }
        table += "</table>"
        return table;
    }

    getButton(id) {
        let button = `<td><button class="btn btn-warning"  onclick="edit(${id})">Edit</button></td>
                      <td><button class="btn btn-warning"  onclick="del(${id})">Delete</button></td>`;
        return button;
    }
}
