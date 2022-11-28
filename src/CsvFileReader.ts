import fs from 'fs';
import { dateStringToDate } from './utils';

export class CsvFileReader {
    data: string[][] = [];

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
        .map((row: string[]): any => {
            return [
                dateStringToDate(row[0]), // Date
                row[1], //team
                row[2], //team
                parseInt(row[3]), //matches
                parseInt(row[4]), //matches
            ];
        });
    }
}