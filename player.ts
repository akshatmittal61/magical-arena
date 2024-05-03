import { cin } from "./utils";

class Player {
    public health: number = 0;
    public strength: number = 0;
    public attack: number = 0;
    public name: string = "";

    public constructor(health: number = 0, strength: number = 0, attack: number = 0, name: string = "") {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
        this.name = name;
    }

    setHealth(health: number) {
        this.health = health;
    }

    setStrength(strength: number) {
        this.strength = strength;
    }

    setAttack(attack: number) {
        this.attack = attack;
    }

    public async create(label: string = "Player") {
        this.health = +(await cin(`Enter ${label} health: `));
        this.strength = +(await cin(`Enter ${label} strength: `));
        this.attack = +(await cin(`Enter ${label} attack: `));
        this.name = label;
    }
}

export default Player;

export type TPlayer = {
    health: number;
    strength: number;
    attack: number;
}
