/*
--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

const readFile = require('fs').readFileSync;

const file = readFile('input.txt', 'utf-8')
.split('\n')
.filter(_ => _.trim())
.map(_ => parseInt(_, 10)); 


console.log(file);
const fileLength = file.length;
let resultNums;
let result;

for (let i = 0; i < file.length; i++) {
    const a = file[i];
    let sum = a;
    if(sum>2019){
        continue;
    } 
    // console.log(' a: ' + a + 'sum ' + sum );
    for (let j = 0; j < file.length; j++) {
        const b = file[j];
        const sum2 = sum + b;
        if(sum2>2019){
            // console.log('with b greater: ' + b);
            continue;
        }
        // console.log('\t' +'a: ' + a + ' b: ' + b + ' sum: ' + sum2 );
        for (let g = 0; g < file.length; g++) {
            const c = file[g];
            const sum3 = sum2 + c;
            if(sum3 === 2020){
                console.log('a: ' + a + ' b: ' + b +  ' c ' + c + ' sum: ' + sum3 );
                resultNums = [a, b, c];
                result = a*b*c;
                console.log('result:'+ result);
                return;
            } 
        }
    }
}




