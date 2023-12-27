// let country = "Rwanda";
// let continent = "Africa";
// let population = 12;

// console.log("My country is: " + country + "and my continent is " + continent + "with population of " + population);

// let javascriptIsFun = true;
// let age = 23;
// let firstName = "Michel";
// console.log(typeof javascriptIsFun);
// console.log(typeof age);
// console.log(typeof firstName);
// javascriptIsFun = 'Yes!'
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// newChar = "";
// console.log(typeof newChar);

// let x,y;
// x=y=20-10-5; 
// console.log(y);
// console.log(x);

// Code Challenges

// BMI Formula.
// BMI = mass / height ** 2 = mass / (height * height)

// const markMass = 78, markHeight=1.68;
// const johnMass = 92, johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// const firstName = "Michel";
// const job = "Student";
// const birthYear = 2000;
// const year = 2024;

// console.log(" I'm " + firstName + " a, " + (year - birthYear) + " years old " + job);

// Using template literals
// console.log(`I'm ${firstName} a ${year - birthYear} years old ${job}`);


// Multiple line 
// console.log("This is \n\
// multi \n\
// line");

// using template literals on multiple lines
// console.log(`This is 
// multi
// line`);

// Decision statements

// Conversion in JavaScripts

// const birthYear = '1991';

// console.log(typeof Number(birthYear));

// coincian in javaScripts

// let n = 1 + '1'; // JavaScripts automatical convert number into String
// n = n - 1; // javaScript automatical convert string into Number 

// console.log(typeof n);
// console.log(n);

// Falsy values 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));

// console.log(Boolean(2));
// console.log(Boolean("Ange"));
// console.log(Boolean(null));

// let money = 100;

// if (money){
//     console.log("Don't spend it all");
// } else{
//     console.log("You have to find a job!");
// }

// let height;

// if (height){
//     console.log("Height is defined!");
// } else {
//     console.log("Height is Undefined?");
// }


// Equality operators

// const favoulite = Number(prompt("Enter favoulite number: "));


// if (favoulite === 23){
//     console.log('23 is cool number');
// }else{
//     console.log('Number is not favoulite');
// }

/*
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


*/

// const scoreDolphins = (96 + 120 + 110)/3;
// const scoreKoalas = (96 + 110 + 120)/3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins win the trophy :)");
// }else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas win the trophy :)");
// }else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("Both win the trophy");
// }else{
//     console.log("No team win the trophy.");
// }





