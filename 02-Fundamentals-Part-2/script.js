'use strict'

// Activating strict mode.

// let hasDriversLicense = false;
// const passTest = true;
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("You can drive now");

// Function in javaScripts

// function logger(){
//     console.log("Hey I'm Michel Ange.");
// }

// // Calling / running/ invorking function.
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice of ${apples} and ${oranges}.`;
//     return juice;
// }
// console.log(fruitProcessor(2,4));

// Function declarations

/* 
function calcAge1(birthYear){
    return 2023 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);
*/




// Function expression

/* 
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);
*/


// Arrow function

/* 
const calcAge3 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    return `Hi ${firstName}, you are ${age} years old`;
};
const age3 = calcAge3(2000, "Michel");
console.log(age3);
*/

// Call function to other functions

/*
const cutPieces = fruit => fruit * 4;

const juice = (apple, orange) => {
    const orangePieces = cutPieces(orange);
    const applePieces = cutPieces(apple);
    return `Juice of ${orangePieces} pieces of oranges and ${applePieces} of apples`;
}

console.log(juice(2,3));
*/

// const calcAge = birthYear => 2023 - birthYear;
// const calcRetirementAge = age => 65 - age;

// const calcUntilRetirement = (birthYear, firstName) =>{
//     const age = calcAge(birthYear);
//     const retirementAge = calcRetirementAge(age);
//     if (retirementAge > 0){
//         console.log(`Hi ${firstName}, Remain year to be retired is ${retirementAge}`);
//         return retirementAge;
//     } else{
//         return -1;
//     }
// }

// console.log(calcUntilRetirement(2000, "Michel"));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(100,100,100);
// const scoreKoalas = calcAverage(65,10,49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas){
//         return `Dolphins win with ${avgDolphins} and Koalas loose with ${avgKoalas}`;
//     } else if(avgKoalas >= (avgDolphins * 2)){
//         return `Koalas win with ${avgKoalas} and Dolphins loose with ${avgDolphins}`;
//     }else {
//         return "No team wins45";
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


*/

/*
const calcAverage = (score1, score2, score3) => (score3 + score2 + score1) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65,54,49);

let score1Dolphins = calcAverage(85, 54, 41);
let score1Koalas = calcAverage(23,34,27);



const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`avgKoalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else{
        console.log('No team wins...');
    }
}

// Calling function

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(score1Dolphins,score1Koalas);

*/



