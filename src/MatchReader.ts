import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResults";

//below, this class is etending an abstract class
export class MatchReader extends CsvFileReader {
    mapRow(row: string[]): MatchData {
        //below this converts all elements of this array into some or the other type.
        //each row is a row from the CSV file
        return [
            dateStringToDate(row[0]), // Date
            row[1], //team
            row[2], //team
            parseInt(row[3]), //matches
            parseInt(row[4]), //matches
            row[5] as MatchResult, //string of match result. We're overriding TS's default behavior (called 'Type Assertion') - telling it that this entry is of type MatchResult enum (H, A or D).
            row[6] //leaving as it is, not converting data type
        ];
    }
}