'use strict'
//define start button
//document.getElementById("start").onClick;

//to put result in number box
//var element=document.getElementsByClassName("number").innerText


//the math

   
let disp = document.getElementById("display");       



    //establish for loop to print 1-100
        for (var i= 1; i <=100; i++){

            switch (0){
                case (i % 15):
                disp.innerHTML +="Fizz Buzz";
                
                    break;
//look if it is divisable by 15 if yes log fizzbuzz if not move next       
                case (i % 3):
                    disp.innerHTML +="Fizz";
                break;
//look if divisable by 3 if yes log fizz if not move next            
                case (i % 5):
                    disp.innerHTML +="Buzz";
                    break
//look if divisable by 5 if yes log buzz if not move next            
                default:
                    disp.innerHTML +=(i);
//if none of the previous statements are true log i from the loop
        
   
            
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
 

/*function for each result of loop*/
