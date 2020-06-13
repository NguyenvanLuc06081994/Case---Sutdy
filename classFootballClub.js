


class FootballClub{
    constructor(name,player) {
        this.name = name;
        this.players = [];
    }
    addPlayer(player){
        this.players.push(player);
    }
    editPlayer(player){
        player.edit();
    }
    deletePlayer(id){
        this.players.splice(id,1)
    }
    getPlayerByID(id){
        return this.players[id];
    }
}