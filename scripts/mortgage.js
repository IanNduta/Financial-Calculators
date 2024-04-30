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
    let principalInput = Number(principal.value);
    let InterestInput = Number(annualInterest.value);
    let yearsInput = Number(years.value);
    let monthlyPayment;


    console.log(principalInput);

    console.log(InterestInput);

    console.log(yearsInput);
    //equation

    let monthlyInterestRate = InterestInput / 1200;
    console.log(monthlyInterestRate)
    let numberOfPayments = yearsInput * 12;
    //monthlyPayment = principalInput * (  monthlyInterestRate   / 1 - ( 1 + monthlyInterestRate)     ) 
    monthlyPayment = principalInput * 
        ( 
            monthlyInterestRate   
            / 
            (1 - ( 1 + monthlyInterestRate)**-numberOfPayments   ) 
        )
    //monthlyPayment = principalInput * (  monthlyInterestRate   / 1 - Math.pow( ( 1 + monthlyInterestRate) , -numberOfPayments)    )

    //output
    mounthyMortgage.value = monthlyPayment;

    
}



// P = 53000
// i = 0.006354
// L = 180

//   1 - ( 1.006354)

// 1 - 0.31978  = 0.68022

// 1053.105259