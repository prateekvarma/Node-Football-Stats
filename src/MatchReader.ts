import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = [];
    
    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
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
        );
    }

    
}