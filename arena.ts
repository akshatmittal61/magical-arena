import Player from "./player";
import { random, sleep } from "./utils";

class Arena {
    public player1: Player = new Player();
    public player2: Player = new Player();

    public constructor(player1: Player, player2: Player) {
        this.player1 = new Player(player1.name, player1.health, player1.strength, player1.attack);
        this.player2 = new Player(player2.name, player2.health, player2.strength, player2.attack);
    }

    public validation(): boolean {
        if (this.player1.attack === 0 && this.player2.attack === 0) return false;
        if (this.player1.health === 0 && this.player2.health === 0) return false;
        return true;
    }

    public async play(): Promise<boolean> {
        const arenaValidation = this.validation();
        if (!arenaValidation) return false;

        let attacker = (this.player1.health < this.player2.health) ? this.player1 : this.player2;
        let defender = (attacker === this.player1) ? this.player2 : this.player1;

        while (this.player1.health > 0 && this.player2.health > 0) {
            const attackerRoll = this.roll();
            const defenderRoll = this.roll();
            let attackDamage = attacker.attack * attackerRoll;
            let defendDamage = defender.strength * defenderRoll;
            console.log(`\nRolls: \n${attacker.name}: ${attackerRoll} \n${defender.name}: ${defenderRoll}`);

            let damage = Math.max(0, attackDamage - defendDamage);
            defender.setHealth(Math.max(0, defender.health - damage));

            if (damage === 0) {
                console.log(`${defender.name} defends the attack of ${attacker.name} successfully.`);
            } else {
                console.log(`${attacker.name} attacks ${defender.name} with damage ${damage}`);
            }

            console.log(`Health of ${attacker.name}: ${attacker.health}`);
            console.log(`Health of ${defender.name}: ${defender.health}`);
            [attacker, defender] = [defender, attacker];
            await sleep(0.5);
        }
        const winner = this.player1.health === 0 ? this.player2 : this.player1;
        console.log(`Result: ${winner.name} won the game!`);
        return true;
    }

    public roll() {
        return random(1, 6);
    }
}

export default Arena;
