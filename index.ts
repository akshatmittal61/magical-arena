import Arena from "./arena";
import Player from "./player";

const init = async () => {
    const player1 = new Player();
    const player2 = new Player();

    const isValidPlayer1 = await player1.validateAndFillPlayerDetails("Player1");
    if(!isValidPlayer1){
        console.log("Error while validating player 1 details, please fill proper values");
        process.exit(0);
    }

    const isValidPlayer2 = await player2.validateAndFillPlayerDetails("Player2");
    if(!isValidPlayer2){
        console.log("Error while validating player 2 details, please fill proper values");
        process.exit(0);    }

    const arena = new Arena(player1, player2);
    const arenaValidation = await arena.play();
    if (!arenaValidation) {
        console.error("Something went wrong");
    }
};

init();
