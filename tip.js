/*
CSE 190M, Summer 2012
This file is a tip calculator page using JavaScript.*/
function calcTip(){
    let x = parseInt(document.getElementById("subtotal").value);
    let y = parseInt(document.getElementById("tip").value);
    let result = x + x*(y/100) ;
    document.getElementById("total").innerHTML = "$ "+ result;
  
}


