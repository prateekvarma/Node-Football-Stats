import fs from 'fs';
import { MatchResult } from './MatchResults';

// Below, we're defining a tuple - accoding to each row for the CSV file
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {} //defining the public modifier will auto create a property called filename, and instantiate whenever the argument is passed when creating an instance of this class
    abstract mapRow(row: string[]): MatchData;

    read(): void {
        this.data  = fs
        .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map(this.mapRow);
    }
}