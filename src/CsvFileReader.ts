import fs from 'fs';

//The "T" below is a generic.
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
        });
    }
}