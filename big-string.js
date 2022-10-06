function bigString(param1, param2) {
    if (param1.length > param2.length){
        return param1
    } else if (param2.length > param1.length){
        return param2
    } else {
        return "Both strings are equal."
    };
};
console.log(bigString("coffee", "coffee"));
