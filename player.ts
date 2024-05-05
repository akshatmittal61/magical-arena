import { cin, isNumeric } from "./utils";

// Define the Player class
class Player {
    // Define public properties for health, strength, attack, and name
    public health: number = 0;
    public strength: number = 0;
    public attack: number = 0;
    public name: string = "";

    // Constructor function to initialize the Player object
    public constructor(name: string = "", health: number = 0, strength: number = 0, attack: number = 0) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    // Setter method for health property
    setHealth(health: number) {
        this.health = health;
    }

    // Method to validate the health input
    validateHealth(health: string): boolean {
        if (isNumeric(health) && +health >= 0) {
            // resolve validateHealth with `true` if the input is an integer and greater than 0
            return true;
        } else {
            return false;
        }
    }

    // Method to validate the strength input
    validateStrength(strength: string): boolean {
        if (isNumeric(strength) && +strength >= 0) {
            // resolve validateStrength with `true` if the input is an integer and greater than 0
            return true;
        } else {
            return false;
        }
    }

    // Method to validate the attack input
    validateAttack(attack: string): boolean {
        if (isNumeric(attack) && +attack >= 0) {
            // resolve validateAttack with `true` if the input is an integer and greater than 0
            return true;
        } else {
            return false;
        }
    }

    // Method to validate and fill player details asynchronously
    public async validateAndFillPlayerDetails(label: string = "Player"): Promise<boolean> {
        // Prompt user to enter player name and trim whitespace
        this.name = (await cin(`Enter name [${label}]: `)).trim() || label;

        // Prompt user to enter player health and validate it
        const healthNum = (await cin(`Enter ${this.name || label} health: `));
        if (this.validateHealth(healthNum)) {
            this.health = +healthNum;
        } else {
            // Resolve with false if health validation fails
            return Promise.resolve(false);
        }

        // Prompt user to enter player strength and validate it
        const strengthNum = (await cin(`Enter ${this.name || label} strength: `));
        if (this.validateHealth(strengthNum)) {
            this.strength = +strengthNum;
        } else {
            // Resolve with false if strength validation fails
            return Promise.resolve(false);
        }

        // Prompt user to enter player attack and validate it
        const attackNum = (await cin(`Enter ${this.name || label} attack: `));
        if (this.validateAttack(attackNum)) {
            this.attack = +attackNum;
        } else {
            // Resolve with false if attack validation fails
            return Promise.resolve(false);
        }

        // Resolve with true if all validations pass
        return Promise.resolve(true);
    }
}

export default Player;

export type TPlayer = {
    health: number;
    strength: number;
    attack: number;
}
