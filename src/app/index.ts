//index.ts
import Play from "./play";
import playRaceEngine from "./raceEngine";

const play_one = new Play("Mario",4,3,3);
const play_two = new Play("Luigi", 3,4,4);


const Winner = async (play_one :Play, play_two: Play) =>{
    console.log("Resultado final:");
    console.log(`${play_one.name}: ${play_one.points} ponto(s)`);
    console.log(`${play_two.name}: ${play_two.points} ponto(s)`);

    if (play_one.points > play_two.points)
        console.log(`\n${play_one.name} venceu a corrida! Parabéns! 🏆`);
    else if (play_two.points > play_one.points)
        console.log(`\n${play_two.name} venceu a corrida! Parabéns! 🏆`);
    else console.log("A corrida terminou em empate");
}



(async function main  () {
    console.log(
        `🏁🚨 Corrida entre ${play_one.name} e ${play_two.name} começando ...\n`
    );
    
    await playRaceEngine(play_one, play_two);
    await Winner(play_one, play_two);

})();


