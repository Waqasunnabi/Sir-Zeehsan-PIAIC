// Q15. Write a program to ask the user about his age. Calculate and show
//      his birth year in your browser

var UserBirth = new Date(prompt("enter your birth date"))
console.log(UserBirth)
var CurrentDate = new Date()


var User = UserBirth.getFullYear()
var Current = CurrentDate.getFullYear();  

console.log("your Age is " + (Current-User))
console.log("your Birth Year is " + User)
