const fibonacci = function(n) {
    n = +n;

    if (n<0) {return "OOPS"}

    let previous = 0;
    let current =1;
    for (i = 1; i<n; i++) {
        temp = previous + current;
        previous = current;
        current = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
