import Arena from "./arena";
import Player from "./player";

// Define an async function to initialize the game
const init = async () => {
    // Print instructions for the game
    console.log(`---------------Instructions---------------`);
    console.log(`1) Player name will always be of type string. Ex: Sanyam`);
    console.log(`2) To use the default value, press enter, names will default to 'Player 1' and 'Player 2'`);
    console.log(`3) Health, Attack, Strength value will be of type integer. Ex: 100`);
    console.log(`4) Value of all of these attributes will always be a positive integer`);
    console.log(`5) Both player can not possess the attack value 0`);
    console.log(`6) Both player can not possess the health value 0`);

    // Create instances of Player class for player1 and player2
    const player1 = new Player();
    const player2 = new Player();

    // Validate and fill details for player1
    const isValidPlayer1 = await player1.validateAndFillPlayerDetails("Player1");
    if(!isValidPlayer1){
        // Exit the program if player1 details are invalid
        console.error("Error while validating player 1 details, please fill proper values");
        process.exit(0);
    }

    // Validate and fill details for player2
    const isValidPlayer2 = await player2.validateAndFillPlayerDetails("Player2");
    if(!isValidPlayer2){
        // Exit the program if player2 details are invalid
        console.error("Error while validating player 2 details, please fill proper values");
        process.exit(0);    
    }

    // Create an instance of Arena class with player1 and player2
    const arena = new Arena(player1, player2);

    // Start the game and validate the arena
    const arenaValidation = await arena.play();
    if (!arenaValidation) {
        // Print an error message if arena validation fails
        console.error("Contestants validation failed, either health or attack of both players is 0, which is not a valid case");
    }
};

// Call the init function to start the game
init();
