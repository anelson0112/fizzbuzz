'use strict'

var totalRows = 10;
var cellsInRow = 10;

function drawTable(){
    //get reference for the grid
    var grid = document.getElementById(grid);

    var tbl = document.createElement ("table");

    for (var r=0; r < totalRows; r++){
        var row = document.createElement("tr");

        for (var c= 0; c < cellsInRow; c++) {

            var cell=document.createElement ("td");
        var cellText = document.createTextNode(buzzMath());
                cell.appendChild(cellText);
                row.appendChild(cell);
        
    

function buzzMath (){
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
                notAFB(element);
//if none of the previous statements are true log i from the loop
        
    
            }}
        }   
    
    }
    
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

    
} */
