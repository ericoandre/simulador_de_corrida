type ConfrontoName = "casco" | "bomba";

export default  class Confronto {
        type: string;
        icons: string;
        penalty: number;
        
        constructor() {
            let randomConfronto = Math.random();
            this.type = randomConfronto < 0.5 ? "casco" : "bomba";
            this.icons = randomConfronto < 0.5 ? "🐢" : "💣";
            this.penalty = randomConfronto < 0.5 ? 1 : 2;
        }
    } 