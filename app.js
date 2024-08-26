const divisibleSumPairs = (n, k, ar) => {
    let count = 0
    for(let i = 0; i < n ; i++){
        for(let j = i + 1; j < n; j++){
            console.log(i , j )
            if (  (ar[i] + ar[j])  % k == 0){
                count += 1
            }
        }
    }
    console.log(count)
}

divisibleSumPairs(6,5,[1,2,3,4,5,6])