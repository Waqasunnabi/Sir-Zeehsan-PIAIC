// Q1   Write a program to take “city” name as input from user. If user enters
//      “Karachi”, welcome the user like this: “Welcome to city of lights”


/*
var UserCity = prompt("Entry City Name!");

if(UserCity == "Karachi" || "karachi"){
    console.log("Karachi is city of light")
}
*/


// Q2   Write a program to take input color of road traffic signal from the user
//      & show the message according to this table:
/*

var Light = prompt("Enter Traffic Light Color");

if(Light == "Red"){alert("Must Stop")}

else if(Light == "Yellow"){alert("Ready to move")}

else if(Light == "Green"){alert("Now GO")}

else {alert("This Light is not in traffic light")}

*/


// Q3 Run this script, & check whether alert message would be displayed or
//    not. Record the outputs.

/*
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
*/



var cityToCheck = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

for (let i = 0; i < cityToCheck.length; i++) {
    var cityshortname = cityToCheck[i]
    console.log(cityshortname.slice(0,3))

}



