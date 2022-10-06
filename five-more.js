/*fiveMore
Write a function called fiveMore that takes in an array of numbers and adds 5 to each odd number then returns the updated array. */

function fiveMore(param){
    let i = 0;
    while(i < param.length){
        if (param[i] % 2 !== 0){  
           param[i] += 5;
        }
        i++;
    }
    return param;
}

console.log(fiveMore([3, 2, 11, 6, 5, 13]));


