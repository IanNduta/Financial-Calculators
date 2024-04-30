"use strict";

window.onload = init;

//variables
const principal = document.getElementById("principal");
const annualInterest = document.getElementById("annualInterest");
const years = document.getElementById("years");
const caculate = document.getElementById("caculate");
const mounthyMortgage = document.getElementById("mounthyMortgage");

function init(){
    caculate.onclick = onClickedCaculate;

}

function onClickedCaculate(){
    //varables
    let principalInput = principal.value;
    let InterestInput = annualInterest.value;
    let yearsInput = years.value;
    let mortgage;

    //equation

    //output
    mortgage = mounthyMortgage.value;
}



// P = 53000
// i = 0.006354
// L = 180

//   1 - ( 1.006354)

// 1 - 0.31978  = 0.68022

// 1053.105259