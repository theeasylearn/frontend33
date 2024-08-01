function getSum(num1, num2) {
    return num1 + num2;
}

function getSub(num1, num2) {
    return num1 - num2;
}

module.exports.add = getSum;
module.exports.sub = getSub; 

module.exports.modulo = (num1, num2) => {
    // let ans = num1 % num2;
    // return ans;

    return num1 % num2;
}
