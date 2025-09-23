function pageCount(n, p) {
    // Write your code here
    let frontCounter = 0
    let backCounter =  0

    for(let i = 1; i <= n; i = i + 2){
        if(i >= p || i - 1 >= p){
            backCounter++
            console.log(`counting from foundpage ${i - 1} and ${i}`)

        }
        else if (i >= 2){
            frontCounter++
            console.log(`counting from front ${i - 1} and ${i}`)

        }
    }
    
    
    
    
    console.log(`count from font is ${frontCounter}`)
    console.log(`count from found  page is ${backCounter}`)

    if(frontCounter > backCounter ){
        console.log(backCounter)
    }else{
        console.log(frontCounter)
    }
}

pageCount(6,2)