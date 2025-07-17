//index.ts
import Play from "./play";
import Confronto from "./confronto";

const getBlock = async () => {
    let random = Math.random();
    let reslt = 'RETA';

    switch(true){
        case random < 0.33:
            reslt = 'RETA';
            break;
        case random < 0.66:
            reslt = 'CURVA';
            break
        default:
            reslt = 'CONFRONTO';
            break; 
    }
    return reslt;
}

const rollDice = async () => {
    return Math.floor(Math.random() *6)+1;
}

const logRollResult = async (playrName: string, block: string, diceResult: number, attribute: number) => {
    console.log(
        `${playrName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
}

const playRaceEngine = async (play_one :Play, play_two: Play) => {
    for(let round = 1; round<=5; round++){
        console.log(`🏁 Rodada ${round}`);

        // sorteio de bloco
        let block = await getBlock();
        console.log(`Bloco ${block}`);

        // rolar os dados
        let diceResultOne = await rollDice();
        let diceResultTwo = await rollDice();

        // teste de abilidades
        let totalTestSkillOne = 0; 
        let totalTestSkillTwo = 0;

        if(block=="RETA"){
            totalTestSkillOne = diceResultOne+play_one.speed;
            totalTestSkillTwo = diceResultTwo+play_two.speed;

            await logRollResult(
                play_one.name,
                "Speed",
                diceResultOne,
                play_one.speed
            );

            await logRollResult(
                play_two.name,
                "Speed",
                diceResultTwo,
                play_two.speed
            );

        }
        if(block=="CURVA"){
            totalTestSkillOne = diceResultOne+play_one.agility;
            totalTestSkillTwo = diceResultTwo+play_two.agility;

            await logRollResult(
                play_one.name,
                "agility",
                diceResultOne,
                play_two.agility
            );

            await logRollResult(
                play_two.name,
                "agility",
                diceResultTwo,
                play_two.agility
            );
        }
        if(block=="CONFRONTO"){
            let powerResultOne = diceResultOne+play_one.power;
            let powerResultTwo = diceResultTwo+play_two.power;

            console.log(`${play_one.name} confrontou com ${play_two.name}! 🥊`);
            
            await logRollResult(
                play_one.name,
                "Power",
                diceResultOne,
                play_two.power
            );

            await logRollResult(
                play_two.name,
                "Power",
                diceResultTwo,
                play_two.power
            );

            let confronto = new Confronto();
            if(powerResultOne > powerResultTwo && play_two.points > confronto.penalty){
                console.log(`${play_one.name} venceu o confronto! ${play_two.name} perdeu ${confronto.penalty} ponto ${confronto.icons}`);
                play_two.points-confronto.penalty;
            }
            if(powerResultTwo > powerResultOne && play_one.points > 0){
                console.log(`${play_two.name} venceu o confronto! ${play_one.name} perdeu ${confronto.penalty} ponto ${confronto.icons}`);
                play_one.points-confronto.penalty;
            }

            if(powerResultOne === powerResultTwo){
                console.log(`Confronto empatado! Nenhum ponto foi perdido `);
            }
        }

        if(totalTestSkillOne>totalTestSkillTwo) {
            console.log(`${play_one.name} marcou um ponto!`);
            play_one.points++;
        }else if(totalTestSkillOne<totalTestSkillTwo){
            console.log(`${play_two.name} marcou um ponto!`);
            play_two.points++;
        }

        console.log("-----------------------------");
    }
}

export default playRaceEngine;