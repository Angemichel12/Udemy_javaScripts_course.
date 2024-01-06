'use strict';

/*
Challenge 

const calcSum = arr => {
  let sum = 0;

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } else {
    return 0;
  }
};

function cantBeatSoJoin(numbers) {
  let max = 0;
  let index = 0;
  let newArray = [];
  let arrLength = numbers.length;

  for (let i = 0; i < arrLength; i++) {
    max = 0;
    for (let i = 0; i < numbers.length; i++) {
      const sum = calcSum(numbers[i]);
      if (sum > max) {
        max = sum;
        index = numbers.indexOf(numbers[i]);
      }
    }
    newArray.push(numbers[index]);
    numbers.splice(index, 1);
  }
  return newArray.flat();
}

console.log(cantBeatSoJoin([[0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1], [3]]));

cantBeatSoJoin([[5, 1],[9, 14],[17, 23],[4, 1],[0, 1]]) -> [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]
cantBeatSoJoin([[13, 37], [43, 17], [2,3], [45,64], [1,9]]) -> [45, 64, 43, 17, 13, 37, 1, 9, 2, 3]
cantBeatSoJoin([[], [], [], []]) -> []
cantBeatSoJoin([[], [], [0], []]) -> [0]
cantBeatSoJoin([[1,0,1,0,1,0], [0,1,0,0,1,0,0,1], [0], []]) -> [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
*/
