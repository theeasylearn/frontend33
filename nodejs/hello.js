const cls = require("./expoClass");
const print = require("./log");

print.log("Hello world! ");

print.log(`Hello ${print.obj.name} ${print.obj.surName}`);

const p1 = new cls("Hadi", "Nayani");
p1.greets();