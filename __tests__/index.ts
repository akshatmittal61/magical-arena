import assert from "node:assert";
import test from "node:test";
import Player from "../player";
import Arena from "../arena";

test("Should handle the case when attack of both players is 0", async () => {
    const playerA = new Player("Player A", 100, 10, 0);
    const playerB = new Player("Player B", 80, 10, 0);

    const arena = new Arena(playerA, playerB);
    assert(arena.validateContestants() === false);
});

test("Should handle the case when attack of only one player is 0", async () => {
    const playerA = new Player("Player A", 100, 10, 4);
    const playerB = new Player("Player B", 80, 10, 0);

    const arena = new Arena(playerA, playerB);
    assert(arena.validateContestants() === true);
});

test("Should handle the case when attack of both players is greater than 0", async () => {
    const playerA = new Player("Player A", 100, 10, 4);
    const playerB = new Player("Player B", 80, 10, 2);

    const arena = new Arena(playerA, playerB);
    assert(arena.validateContestants() === true);
});

test("Should handle the case when health of both players is 0", async () => {
    const playerA = new Player("Player A", 0, 10, 10);
    const playerB = new Player("Player B", 0, 10, 10);

    const arena = new Arena(playerA, playerB);
    assert(arena.validateContestants() === false);
});

test("Should handle the case when health of both players is greater than 0", async () => {
    const playerA = new Player("Player A", 100, 10, 10);
    const playerB = new Player("Player B", 100, 10, 10);

    const arena = new Arena(playerA, playerB);
    assert(arena.validateContestants() === true);
});

test("Should handle the case when health of only one player is 0", async () => {
    const playerA = new Player("Player A", 10, 10, 10);
    const playerB = new Player("Player B", 0, 10, 10);

    const arena = new Arena(playerA, playerB);
    assert(arena.validateContestants() === true);
});

test("Should handle the case when value of player health is string like abc", async () => {
    const playerA = new Player();
    const health = "abc";

    assert(playerA.validateHealth(health) === false);
});

test("Should handle the case when value of player health is less than 0", async () => {
    const playerA = new Player();
    const health = "-12";

    assert(playerA.validateHealth(health) === false);
});

test("Should handle the case when value of player health is greater than 0", async () => {
    const playerA = new Player();
    const health = "12";

    assert(playerA.validateHealth(health) === true);
});

test("Should handle the case when value of player attack is string like abc", async () => {
    const playerA = new Player();
    const attack = "abc";

    assert(playerA.validateAttack(attack) === false);
});

test("Should handle the case when value of player attack is less than 0", async () => {
    const playerA = new Player();
    const attack = "-10";

    assert(playerA.validateAttack(attack) === false);
});

test("Should handle the case when value of player attack is greater than 0", async () => {
    const playerA = new Player();
    const attack = "10";

    assert(playerA.validateAttack(attack) === true);
});

test("Should handle the case when value of player strength is string like abc", async () => {
    const playerA = new Player();
    const strength = "abc";

    assert(playerA.validateStrength(strength) === false);
});

test("Should handle the case when value of player strength is less than 0", async () => {
    const playerA = new Player();
    const strength = "-10";

    assert(playerA.validateStrength(strength) === false);
});

test("Should handle the case when value of player strength is greater than 0", async () => {
    const playerA = new Player();
    const strength = "10";

    assert(playerA.validateStrength(strength) === true);
});