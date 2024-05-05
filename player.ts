import { cin, isNumeric } from "./utils";

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

    validateHealth(health: string): boolean{
        if(isNumeric(health) && +health >= 0){
            return true;
        }else{
            return false;
        }
    }

    validateStrength(strength: string): boolean{
        if(isNumeric(strength) && +strength >= 0){
            return true;
        }else{
            return false;
        }
    }

    validateAttack(attack: string): boolean{
        if(isNumeric(attack) && +attack >= 0){
            return true;
        }else{
            return false;
        }
    }

    public async validateAndFillPlayerDetails(label: string = "Player"): Promise<boolean> {
        this.name = (await cin(`Enter name [${label}]: `)).trim() || label;

        const healthNum = (await cin(`Enter ${this.name || label} health: `));
        if(this.validateHealth(healthNum)){
            this.health = +healthNum;
        }else{
            // resolving this with false because we want to handle it in parent method
            return Promise.resolve(false);
        }

        const strengthNum = (await cin(`Enter ${this.name || label} strength: `));
        if(this.validateHealth(strengthNum)){
            this.strength = +strengthNum;
        }else{
            return Promise.resolve(false);
        }

        const attackNum = (await cin(`Enter ${this.name || label} attack: `));
        if(this.validateAttack(attackNum)){
            this.attack = +attackNum;
        }else{
            return Promise.resolve(false);
        }

        return Promise.resolve(true);
    }
}

export default Player;

export type TPlayer = {
    health: number;
    strength: number;
    attack: number;
}
