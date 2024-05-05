import assert from "node:assert";
import test from "node:test";
import Player from "../player";
import Arena from "../arena";

test("One player should end with zero health", async () => {
    const playerA = new Player("Player A", 100, 6, 12);
    const playerB = new Player("Player B", 80, 4, 10);

    const arena = new Arena(playerA, playerB);
    await arena.play();

    assert(arena.player1.health === 0 || arena.player2.health === 0);
});

test("Should handle strength 0", async () => {
    const playerA = new Player("Player A", 100, 0, 12);
    const playerB = new Player("Player B", 80, 0, 10);

    const arena = new Arena(playerA, playerB);
    await arena.play();

    assert(arena.player1.health === 0 || arena.player2.health === 0);
});

test("Should handle attack 0", async () => {
    const playerA = new Player("Player A", 100, 10, 0);
    const playerB = new Player("Player B", 80, 10, 0);

    const arena = new Arena(playerA, playerB);
    const arenaResult = await arena.play();

    assert(arenaResult === false);
});

test("Should handle health 0", async () => {
    const playerA = new Player("Player A", 0, 10, 0);
    const playerB = new Player("Player B", 0, 10, 0);

    const arena = new Arena(playerA, playerB);
    const arenaResult = await arena.play();

    assert(arenaResult === false);
});

test("Should handle equal health", async () => {
    const playerA = new Player("Player A", 100, 6, 12);
    const playerB = new Player("Player B", 100, 4, 10);

    const arena = new Arena(playerA, playerB);
    await arena.play();

    assert(arena.player1.health === 0 || arena.player2.health === 0);
});

test("Handle uncaught rejection in entire game", async () => {
    try {
        const playerA = new Player("", 0, 0, 0);
        const playerB = new Player("", 0, 0, 0);
    
        await playerA.validateAndFillPlayerDetails("Player 1");
        await playerB.validateAndFillPlayerDetails("Player 2");
    
        const arena = new Arena(playerA, playerB);
    
        await arena.play();
        assert.ok(true);
    } catch (error) {
        assert.fail(`${error}`);
    }
});
