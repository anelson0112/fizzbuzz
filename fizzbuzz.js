'use strict'
//tell it to look for the items in the DOM
document.addEventListener
//make the squares change color and text when pressed
function showFizz (element){
    element.innerText= "Fizz";
}
function showBuzz (element){
    element.innerText= "Buzz";
}
function showFizzBuzz (element){
    element.innerText= "Fizz Buzz";
}
function none (element){
    element.style.backgroundColor='grey';
}

function fizzMath(squareValue, element){
//establish for loop to print 1-100
for (var i= 1; i <=100; i++){

    switch (0){
        case (i % 15):
            showFizzBuzz (element);
            break;
//look if it is divisable by 15 if yes log fizzbuzz if not move next       
        case (i % 3):
            showFizz (element);
            break;
//look if divisable by 3 if yes log fizz if not move next            
        case (i % 5):
            showBuzz (element);
            break
//look if divisable by 5 if yes log buzz if not move next            
        default:
            none(element);
//if none of the previous statements are true log i from the loop
    }
}}
//create var for the numbers

var numbers=document.querySelectorAll('.number');

//event listners
for (var i=0; i < numbers.length; i++){
    var numClick= numbers[i].addEventListener ('click', function() {
        var squareValue = parseInt(this.innerText);
        var element=this;
        fizzMath (squareValue,element);
    });
    }
