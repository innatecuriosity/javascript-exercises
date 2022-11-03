const sumAll = function(num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number')) {return "ERROR"}

    let lowest = num1;
    let highest = num2;

    if (num1>num2) {lowest = num2; highest = num1;}

    if (lowest <0) {return "ERROR"}

    let sum = 0;

    for (let i = lowest; i <= highest; i++) {sum += i}

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
