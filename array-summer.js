function arraySummer(numlist){
    let i = 0
    let sum = 0
    while (i < numlist.length ){
        
        sum += numlist[i];
        i++;
    }
    return sum;
}
console.log(arraySummer([2 ,11 ,15]));
