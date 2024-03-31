#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 30000;
let pin: number = 2409;
let pinAnswer = await inquirer.prompt([{
    name: "q1",
    message: "please enter yuor pin code",
    type: "number"
}]);

if(pinAnswer.q1 === pin){
    console.log("correct pin code!!!")
    let opr = await inquirer.prompt(
        [{
            name: "operation",
            message: "select on of the operation",
            type: "list",
            choices: ["Withdraw", "Check balance", "Fast cash"],
        }]
    );
    if(opr.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Enter the amount to withdraw",
            type: "number"
        }]);
        if (amountAns.amount < myBalance ){
            myBalance -= amountAns.amount;
            console.log("Now your balance is" + myBalance)
        }
        else{
            console.log("insufficient balance")
        }
    } 
    else if(opr.operation === "Check balance"){
        console.log("your current balance is" + myBalance)
    }
    else if (opr.operation === "Fast cash"){
        let fast = await inquirer.prompt(
            [{
                name: "fast_opr",
                message: "how much money you want to withdraw",
                type: "list",
                choices: ["1000", "10000", "15000", "25000"],
            }]
        );
        if(fast.fast_opr === "1000"){
            myBalance -= fast.fast_opr;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast_opr === "10000"){
            myBalance -= fast.fast_opr;
            console.log(`your remainingbalance is ${myBalance}`);
        }
        if(fast.fast_opr === "15000"){
            myBalance -= fast.fast_opr;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if(fast.fast_opr === "25000"){
            myBalance -= fast.fast_opr;
            console.log(`yor remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("invalid pin code")
}