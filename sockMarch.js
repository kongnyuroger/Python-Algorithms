/*There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
n = 7
ar =[1,2,1,2,1,3,2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs

*/
function sockMerchant(n, ar) {
    // Write your code here
    let numberOfPairs = 0
    let counter = 0
    for(let i = 0; i < n; i++ ){
        if(ar[i] != null){
            counter += 1

            for(let j = i + 1; j < n; j++){
                if(ar[i] === ar[j]){ 
                    counter++
                    ar[j] = null
                    if( counter == 2){
                        numberOfPairs++
                        counter = 0      
                    }
                }
        }
        counter = 0
        }
        
    }
    
    return numberOfPairs
}

console.log(` ${sockMerchant(7,[1,2,1,2,1,3,2])} pair of socks have been found`)