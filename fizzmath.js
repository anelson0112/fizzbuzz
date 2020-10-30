'use strict'

//make a button to start the function
document.getElementById("start").onclick=buzzMath;

//var slowFizz = 
//setInterval("buzzMath()", 1000);
//turn loop into a function for the start button to call


function buzzMath(){
let disp = document.getElementById("myForm");       
  


    //establish for loop to print 1-100
        for (var i= 1; i <=100; i++){

            switch (0){
                case (i % 15):
                disp.innerHTML +="Fizz Buzz"+ "<br>";
                    
                    break;
//look if it is divisable by 15 if yes log fizzbuzz if not move next       
                case (i % 3):
                    disp.innerHTML +="Fizz"+ "<br>";
                    
                break;
//look if divisable by 3 if yes log fizz if not move next            
                case (i % 5):
                    disp.innerHTML +="Buzz"+ "<br>";
                    
                    break
//look if divisable by 5 if yes log buzz if not move next            
                default:
                    disp.innerHTML +=(i)+ "<br>";
//if none of the previous statements are true log i from the loop
        
   
            }
        }
    }    