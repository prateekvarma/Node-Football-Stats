import fs from 'fs';

const matches = fs
    .readFileSync('football.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',')
    });

let manUnitedWins = 0; //checks how many games Man united won

for (let match of matches) {
    if(match[1] === 'Man United' && match[5] === 'H') { //H means home wins
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === 'A'){ //A means away wins
        manUnitedWins++;
    } 
}

console.log(`Man United won ${manUnitedWins} games`);