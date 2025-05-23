function divide(num1, num2){
    try {
        if (num2 === 0){
            throw new Error("You can't divide by zero.");
        } 
        let result = num1 / num2;
        return result
    } catch (error) {
        return error
    }
    
};

console.log(divide(5, 2))
console.log(divide(5, 0))
