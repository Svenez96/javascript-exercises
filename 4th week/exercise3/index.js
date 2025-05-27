function sum (x, y, callback){
    let result = x + y;
    callback(result);
};

function mult (a, b, callback){
    let result = a * b;
    callback(result);
};

 sum(4, 6, function (sumResult){
    mult(sumResult, 2, function(finalResult){
        console.log(finalResult)
    })
 });