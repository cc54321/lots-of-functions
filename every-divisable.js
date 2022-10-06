/* everyDivisible
Write a function called everyDivisible that takes in a number n then prints every number less than or equal to 100 that is divisible that number n.

For example, if n = 7

Your function would print:  
7
14
21
28
35
42
49
56
63
70
77
84
91
98*/

function everyDivisible(n){
    let i = 0;
    while(i < 100){
        i += n;
        console.log(i);
    }
}
everyDivisible(5);
