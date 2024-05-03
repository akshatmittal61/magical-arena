import { TPlayer } from "./player";
import { cin } from "./utils";

const init = async () => {
    const player1: TPlayer = {
        health: 0,
        strength: 0,
        attack: 0
    }
    player1.health = +(await cin("Health of player 1: "));
    console.log("yay! i got it: ", JSON.stringify(player1, null, 2));
};

init();
