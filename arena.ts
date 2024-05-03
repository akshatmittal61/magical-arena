import Player, { TPlayer } from "./player";
import { random } from "./utils";

class Arena {
    public player1: Player = new Player(0, 0, 0);
    public player2: Player = new Player(0, 0, 0);

    public constructor(player1: TPlayer, player2: TPlayer) {
        this.player1 = new Player(player1.health, player1.strength, player1.attack);
        this.player2 = new Player(player2.health, player2.strength, player2.attack);
    }

    public play() {
        console.log("Play game");
    }

    public roll() {
        return random(1, 6);
    }
}

export default Arena;
