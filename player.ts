class Player {
    public health: number = 0;
    public strength: number = 0;
    public attack: number = 0;

    public constructor(health: number, strength: number, attack: number) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
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
}

export default Player;

export type TPlayer = {
    health: number;
    strength: number;
    attack: number;
}
