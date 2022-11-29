import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0; //checks how many games Man united won

for (let match of reader.data) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { //H means home wins
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){ //A means away wins
        manUnitedWins++;
    } 
}

console.log(`Man United won ${manUnitedWins} games`);