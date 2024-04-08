//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let result = 0
  for (const v of array) {
    if (operation(v)) {
      result++
    } 
  }

  return result >= 5
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

const moreThan70 = val => val > 70

let scoreRoom1Result = atLeastFive(studentScoresRoom1, moreThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, moreThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, moreThan70);

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)