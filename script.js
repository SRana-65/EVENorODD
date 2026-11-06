function checkNumber(){
    let input = document.getElementById("numberInput");

if (input.value === "") {
    console.log("Please enter a number.");
    return;
}

let number = Number(input.value);
    let remainder=number%2;
let result;

if (remainder===0){
    result="Even"
}
else{
    result="Odd"
}
let message = "The Number " + number + " is " + result + ".";

document.getElementById("output").textContent = message;

console.log(message);
}




