'use strict'
//define start button
document.getElementById("start").onClick=buzzMath;

//to put result in number box
//var element=document.getElementsByClassName("number").innerText


//the math

 function fizzMath(){   
var display = document.getElementById('display');       
var result= '';
var displayHTML = "";

    //establish for loop to print 1-100
        for (var i= 1; i <=100; i++){

            switch (0){
                case (i % 15):
                result="Fizz Buzz";
                    break;
//look if it is divisable by 15 if yes log fizzbuzz if not move next       
                case (i % 3):
                    result="Fizz";
                break;
//look if divisable by 3 if yes log fizz if not move next            
                case (i % 5):
                    result="Buzz";
                    break
//look if divisable by 5 if yes log buzz if not move next            
                default:
                    result=(i);
//if none of the previous statements are true log i from the loop
        
    displayHTML += "<p>" + result + "<p>";            }
            
        }
    
    
 
    
    
    
    
    
    //tell it to look for the items in the DOM
/*document.addEventListener('DOMContentLoaded',function(){
    


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
          function notAFB (element){
              element.innerText= "Not";
          }
  
      function fizzMath(squareValue, element){
    
    
            var numbers=document.querySelectorAll('.number');

    for (var i=0; i < numbers.length; i++){
        var numClick = numbers[i].addEventListener('click',function(){
        var squareValue=parseInt(element.innerText);
        
        fizzMath(squareValue,element);
        
        });
var numClick = number[i].addEventListener('click',function(){
                var squareValue=parseInt(element.innerText);
                
                fizzMath(squareValue,element);
                
                })
    
} */
 

//function for each result of loop
