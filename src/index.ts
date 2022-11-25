import fs from 'fs';

const matches = fs
    .readFileSync('football.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',')
    });

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let manUnitedWins = 0; //checks how many games Man united won

for (let match of matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { //H means home wins
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){ //A means away wins
        manUnitedWins++;
    } 
}

console.log(`Man United won ${manUnitedWins} games`);