import Arena from "./arena";
import Player from "./player";

const init = async () => {
    const player1 = new Player();
    const player2 = new Player();
    await player1.create("Player 1");
    await player2.create("Player 2");
    
    const arena = new Arena(player1, player2);
    arena.play();
};

init();
