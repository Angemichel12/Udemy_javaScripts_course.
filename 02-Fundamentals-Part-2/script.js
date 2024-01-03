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

// Arrays

// Create function to return array of my friends name

// const friends =()=>["David", "Tresor","Christian"];
// console.log(friends());
// const friends = ["David", "Renzo","Christian"];

// Display array length of friend array.
// console.log(friends.length);

// Display first friend name from array friends using index

// console.log(friends[0]);

// display last friend name from array friends 

// console.log(friends[friends.length -1]);

// Replace second friend with my friend Tresor
// friends[1] = "Tresor";

// display second element from array friends
// console.log(friends[1]);

// Create array to store values with different data types
// const firstName = "Michel";

// const nasri = [firstName, "Ange", 2023-2000, friends];
// console.log(nasri[nasri.length - 1]);

// create array to store sum of numbers
// const sumOfNumber = (number1, number2, number3) => number1 + number2 + number3;

// const arrayOfSumNumber = [sumOfNumber(12,12,12), sumOfNumber(2,2,2)];
// console.log(arrayOfSumNumber);


// Array methods
// const friends = ["David", "Tresor","Christian"];

/*
The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/
// console.log(friends.toString());

/* 
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:
*/
// const arrayJoin = friends.join(" ");
// console.log(arrayJoin);

/* 
JavaScript Array pop()
The pop() method removes the last element from an array:
*/
// friends.pop();
// console.log(friends.join(','));

/* 
JavaScript Array push()
The push() method adds a new element to an array (at the end):
*/
// friends.push("Renzo");
// console.log(friends.toString());

/*
JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/

// The shift() method returns the value that was "shifted out":

// const friend = friends.shift();
// console.log(friend);

/*
JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
*/
// const addFavFriend = friends.unshift("Twagira");
// console.log(addFavFriend);

/*
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.
*/

// delete friends[0];
// console.log(friends);

/*
The concat() method creates a new array by merging (concatenating) existing arrays:
*/

// const friendsCollege = ["David", "Tresor","Christian"];
// const highSchoolFriends = new Array("Francis", "Dany", "Claude");

// const friends = friendsCollege.concat(highSchoolFriends);
// console.log(friends.join(','));

/*
Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

The flat() method creates a new array with sub-array elements concatenated to a specified depth.
*/

// const friendsCollege = [["David"], ["Tresor","Christian"]];
// const highSchoolFriends = new Array("Francis", "Dany", "Claude");
// friendsCollege.push(highSchoolFriends);
// console.log(friendsCollege.join(','));
// const newArray = friendsCollege.flat();
// console.log(newArray);

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture.
*/

/*
const calcTip = (bill) => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;

const bills = [125,555,44];

const tips = [];
const total = [];
for(let i=0; i < bills.length; i++){
tips.push(calcTip(bills[i]));
total.push(calcTip(bills[i]) + bills[i]);
}

*/

// const michelArray = ['Michel', 'Ange', 2024 - 2000, ['David', 'Christian', 'Tresor']];

// const michel = {
//     firstName:'Michel',
//     lastName:'Ange',
//     age:2024 - 2000,
//     friends : ['David', 'Christian', 'Tresor']
// }
// console.log("Hello User");
// console.log(`${michel.firstName} has ${michel['friends'].length} friends, The best friend called ${michel['friends'][0]}`);


// Object methods

const michel = {
        firstName:'Michel',
        lastName:'Ange',
        job:'teacher',
        birthYear:2000,
        friends : ['David', 'Christian', 'Tresor'],
        hasDriversLicense: false,
        calAge: function () {
            this.age= 2024 - this.birthYear;
            return this.age;
        },
        getSummary: function(){
            this.summary = `${this.firstName} is a ${this.calAge()} ${this.job}, and he has ${this.hasDriversLicense?"a":"not"} driver's license.`;
            return this.summary;
        }
        
    }


michel.getSummary();
michel.calAge();
console.log(michel.age);
console.log(michel.summary);








