//play.ts
export default class Play {
        name: string;
        speed: number;
        agility: number;
        power: number;
        points: number;

        constructor(name: string, speed: number, agility: number, power: number) {
            this.name = name;
            this.speed = speed;
            this.agility = agility;
            this.power = power;
            this.points = 0;
        }
    }