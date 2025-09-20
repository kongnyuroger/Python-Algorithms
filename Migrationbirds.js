/* The main task of this algorithm is simply to go throw an array of numbers, and return the least number 
   that appears multiple times */



/*function migratoryBirds(arr) {
  // Write your code here
  let permanentNUmberOfMatches = 0;
  let currentNumOfMatches = 0;
  let type = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentNumOfMatches = currentNumOfMatches + 1;
      }
    }

    if (currentNumOfMatches > permanentNUmberOfMatches) {
      permanentNUmberOfMatches = currentNumOfMatches;
      type = arr[i];
    }

    if (currentNumOfMatches === permanentNUmberOfMatches && type > arr[i]) {
      type = arr[i];
    }

    currentNumOfMatches = 0;
  }
  console.log(type);
}

//migratoryBirds([1,1,1,2,2,2,4])
*/

function migribirds(arr) {
  let birds = {};
  for (let bird in arr) {
    birds[arr[bird]] = (birds[arr[bird]] || 0) + 1;
  }

  let birdtype = 0;
  let highestNum = 0;
  for (let bird in birds) {
    if (birds[bird] > highestNum) {
      birdtype = bird;
      highestNum = birds[birdtype];
    }

    if (birds[bird] === highestNum && birdtype > bird) {
      birdtype = bird;
    }
  }
  console.log(birdtype);
}
migribirds([3, 3, 3, 1, 3, 5, 6, 7, 1, 1, 3, 1]);
