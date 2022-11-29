import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';

// Below, we're defining a tuple - accoding to each row for the CSV file
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {} //defining the public modifier will auto create a property called filename, and instantiate whenever the argument is passed when creating an instance of this class

    read(): void {
        this.data  = fs
        .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map((row: string[]): MatchData => {
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
        });
    }
}