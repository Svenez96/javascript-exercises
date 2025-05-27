function errorsCheck (num){
    let number = [];

if (num > 100){
    console.error("The number is too high");
} else if (num < 0){
    console.warn("The number must be higher than 0");
} else {
    number.push(num);
};

return number
};


console.log(errorsCheck(10));
console.log(errorsCheck(150));
console.log(errorsCheck(-5));

