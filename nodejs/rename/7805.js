function fun1() {
    console.log("fun1 ");
} 
function fun2() {
    setTimeout(() => {
        console.log("fun2 "); 
    }, 0);
}

// function temp() {
//     fun2()
//     fun1()
// }
// temp();

// * iife 
(function temp() {
    console.log("temp ");    
    fun2()
    fun1()
})()


let text = "hadi ";
text = "nayani " 

text += "hadi "
console.log(text); // nayani hadi 
