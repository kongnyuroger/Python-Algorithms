function migratoryBirds(arr) {
    // Write your code here
    let permanentNUmberOfMatches = 0;
    let currentNumOfMatches = 0;
    let type = arr[0];
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){       
            if(arr[i] === arr[j]){
                currentNumOfMatches = currentNumOfMatches + 1;
            }
        }
        
        if(currentNumOfMatches > permanentNUmberOfMatches){
            permanentNUmberOfMatches = currentNumOfMatches;
            type = arr[i];
        }

         if(currentNumOfMatches === permanentNUmberOfMatches && type > arr[i]){
            type = arr[i];
        }


        currentNumOfMatches = 0
    }
    console.log(type)
}

migratoryBirds([1,1,1,2,2,2,4])
