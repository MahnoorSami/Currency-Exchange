import {  } from "console";
import inquirer from 'inquirer';
let currencyconverter ={
    "USD":{
        "USD":1,
        "EUR":0.92,
        "PKR":278
    },
    "EUR":{
        "USD":1.08,
        "EUR":1,
        "PKR":300
    },
    "PKR":{
        "USD":0.036,
        "EUR":0.033,
        "PKR":1
    },
}

//INPUT PROMPT
const answer : {
    from:"PKR" | "USD" | "EUR",
    to: "PKR" | "USD" | "EUR",
    amount: number,
} = await inquirer.prompt(
    [
        {
            name: "from",
            message: "enter the currency you want to convert",
            type: "list",
            choices: ["USD", "EUR", "PKR"]
        },
        {
            name: "to",
            message: "select currency",
            type: "list",
            choices: ["USD", "EUR", "PKR"]
        },
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
            choices: ["USD", "EUR", "PKR"]
        },
    ]
)

const {from,to,amount} = answer;
//conversion
if(from && to && amount){
    let result =currencyconverter[from][to] * amount;
    console.log(`conversion from ${from} to ${to} is ${result}`)
}else{
    console.log("Invalid Response")
}