function bonAppetit(bill, k, b) {
    // Write your code here
    let billsIncludeAnna = 0
    for(let i = 0; i < bill.length; i++){
        if(i === k ){
            bill[i] = 0
        }
        billsIncludeAnna += bill[i]
    }
    console.log(billsIncludeAnna)
    let annaPayment = billsIncludeAnna/2
    if(annaPayment === b){
        console.log("Bon Appetit")
    }else{
        console.log(b - annaPayment)
    }
}

bonAppetit([3, 10, 2, 9], 1, 12)