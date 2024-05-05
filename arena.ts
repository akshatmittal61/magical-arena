import Player from "./player";
import { random, sleep } from "./utils";

class Arena {
    public player1: Player = new Player();
    public player2: Player = new Player();

    public constructor(player1: Player, player2: Player) {
        this.player1 = new Player(player1.name, player1.health, player1.strength, player1.attack);
        this.player2 = new Player(player2.name, player2.health, player2.strength, player2.attack);
    }

    public validateContestants(): boolean {
        if (this.player1.attack === 0 && this.player2.attack === 0) return false;
        if (this.player1.health === 0 && this.player2.health === 0) return false;
        return true;
    }

    public async play(): Promise<boolean> {
        const arenaValidation = this.validateContestants();
        if (!arenaValidation) return false;

        let attacker = (this.player1.health < this.player2.health) ? this.player1 : this.player2;
        let defender = (attacker === this.player1) ? this.player2 : this.player1;

        let num = 1;

        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(`\n-------------------Round ${num}-----------------`);
            console.log(`Attacker: ${attacker.name} (Health: ${attacker.health})`);
            console.log(`Defender: ${defender.name} (Health: ${defender.health})`);
            
            const attackerDiceOutcome = this.roll();
            const defenderDiceOutcome = this.roll();
            
            let hittingPower = attacker.attack * attackerDiceOutcome;
            console.log(`\nAttacker <${attacker.name}> rolls the dice to attack defender <${defender.name}> `);
            console.log(`Dice Outcome: ${attackerDiceOutcome}`);
            console.log(`Hitting Power: Dice Outcome * attack <${attacker.name}> = ${attackerDiceOutcome}*${attacker.attack} = ${hittingPower}`);

            let defendingPower = defender.strength * defenderDiceOutcome;
            console.log(`\nDefender <${defender.name}> rolls the dice to defend the attacker <${attacker.name}>`);
            console.log(`Dice Outcome: ${defenderDiceOutcome}`);
            console.log(`Defending Power: Dice Outcome * strength <${defender.name}> = ${defenderDiceOutcome}*${defender.strength} = ${defendingPower}`);

            let damage = Math.max(0, hittingPower - defendingPower);
            console.log(`Damage done by attacker = Hitting Power - Defending Power = ${hittingPower} - ${defendingPower} = ${damage}`);

            defender.setHealth(Math.max(0, defender.health - damage));

            console.log(`Attacker <${attacker.name}> Health: ${attacker.health}`);
            console.log(`Defender <${defender.name}> Health: ${defender.health}`);
            [attacker, defender] = [defender, attacker];

            /* i called sleep method below to make game logs readable at runtime
            else game will terminate and we will have to scroll above to check for logs at each step */
            await sleep(0.5);
            num = num + 1;
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
