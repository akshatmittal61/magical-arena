import { cin } from "./utils";

class Player {
    public health: number = 0;
    public strength: number = 0;
    public attack: number = 0;
    public name: string = "";

    public constructor(name: string = "", health: number = 0, strength: number = 0, attack: number = 0) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    setHealth(health: number) {
        this.health = health;
    }

    public async create(label: string = "Player") {
        this.name = (await cin(`Enter name [${label}]: `)) || label;
        this.health = +(await cin(`Enter ${this.name || label} health: `));
        this.strength = +(await cin(`Enter ${this.name || label} strength: `));
        this.attack = +(await cin(`Enter ${this.name || label} attack: `));
    }
}

export default Player;

export type TPlayer = {
    health: number;
    strength: number;
    attack: number;
}
