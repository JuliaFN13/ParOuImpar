console.log("Esse documento está ok");

let btn1 = document.getElementById("btn1");
let num = document.getElementById("num").value;
num = parseInt(num);
let numT = num % 2;

btn1.addEventListener("click", function(){    
let num = document.getElementById("num").value;
num = parseInt(num);
let numT = num % 2;

    if (numT == 0){

        alert("O valor digitado " + num +" é par.");

    } else{

        alert("O valor digitado " + num + " é ímpar.");
    }
})