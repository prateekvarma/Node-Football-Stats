import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// step 1: Create an object that saitsfies the 'DataReader' interface
const csvFileReader =  new CsvFileReader('football.csv');

// step 2: Create an instance of MatchReader and pass in something that
//         satisfies the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load(); //now matchReader.matches() gives us the info we want

//console.log(`Man United won ${manUnitedWins} games`);