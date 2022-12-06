import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// step 1: Create an object that saitsfies the 'DataReader' interface
const csvFileReader =  new CsvFileReader('football.csv');

// step 2: Create an instance of MatchReader and pass in something that
//         satisfies the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load(); //now matchReader.matches() gives us the info we want


let manUnitedWins = 0; //checks how many games Man united won

for (let match of matchReader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { //H means home wins
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){ //A means away wins
        manUnitedWins++;
    } 
}

console.log(`Man United won ${manUnitedWins} games`);