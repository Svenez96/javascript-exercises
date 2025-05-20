function sum (...num){
    return num.reduce((acc,cur) => acc + cur, 0)
};

console.log(sum(1,2,3));
console.log(sum(10,20,30));
console.log(sum(15,25,50));