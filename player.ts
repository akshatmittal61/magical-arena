import { cin, cinNumber } from "./utils";

class Player {
    public health: number = 0;
    public strength: number = 0;
    public attack: number = 0;
    public name: string = "";
    public validation: boolean = true;

    public constructor(name: string = "", health: number = 0, strength: number = 0, attack: number = 0, validation: boolean = true) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
        this.validation = validation;
    }

    setHealth(health: number) {
        this.health = health;
    }

    public async create(label: string = "Player") {
        try {
            this.name = (await cin(`Enter name [${label}]: `)).trim() || label;
            this.health = +(await cinNumber(`Enter ${this.name || label} health: `));
            this.strength = +(await cinNumber(`Enter ${this.name || label} strength: `));
            this.attack = +(await cinNumber(`Enter ${this.name || label} attack: `));
            this.validation = true;
        } catch (error) {
            console.error(error);
            this.validation = false;
        }
    }
}

export default Player;

export type TPlayer = {
    health: number;
    strength: number;
    attack: number;
}
