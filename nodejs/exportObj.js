const obj = {
    getProd: (num1, num2) => {
        return num1 * num2;
    },
    getDiv: function (num1, num2) {
        return num1 / num2;
    },
};
console.log(module);
console.log(exports);

module.exports = obj;

console.log("module ", module);
console.log("module.exports ", module.exports);
