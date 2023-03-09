// Q1. Write a program to replace the “Hyder” to “Islam” in the word
//     “Hyderabad” and display the result in your browser.


// var a = "Hyderabad"
// console.log(a)
// var b = a.replace("Hyder","Islam")
// console.log(b)

//---------------------------------------------------------

// Q2. Write a program that converts a string “472” to a number 472. Display
//     the values & types in your browser.


// var strintonumber = "472"
// console.log(typeof(strintonumber));
// var ab = parseInt(strintonumber)
// console.log(typeof(ab));

//---------------------------------------------------------

// 3. Write a program to take password as an input from user. The
//    password must qualify these requirements:
//    a. It should contain alphabets and numbers
//    b. It should not start with a number
//    c. It must at least 8 characters long
//    d. If the password does not meet the above requirements, prompt
//    the user to enter a valid password. For character codes of a-z,
//    A-Z & 0-9


// var UserPasswordCheck = prompt("Enter Password Check")

// var number = [0,1,2,3,4,5,6,7,8,9]
// var CapitalAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var FirstCapital = false
// var NumLen = false

// for (let i = 0; i < CapitalAlphabet.length; i++) {
//     if (UserPasswordCheck.charAt(0) == CapitalAlphabet[i]) {
//         var FirstCapital = true;
//     }
// }

// if (UserPasswordCheck.length >= 8) {
//     var NumLen = true;
// }

// if (FirstCapital == true && NumLen == true) {
//     console.log("Your Password successfully update")    
// }
// if (FirstCapital == false) {
//     console.log("First letter must be alphabet and capital") 
// }
// if (NumLen == false) {
//     console.log("Least 8 characters long") 
// }


//---------------------------------------------------------


// Q4. Write a program to validate email address with following evaluation
//     a. This string must contain @
//     b. Ths string must contact chars
//     c. The @ must have at least 1 char in front
//     d. The string must contain .(dot) after @ and at least 1 char.

// var EmailAddress = "waqas@gmail.com";
// var dotcheck =  EmailAddress.slice(EmailAddress.indexOf("@"),(EmailAddress.length));
// var Atcount = 0;
// var emaildot = false;
// var firstat = true;
// var atcheck = false;



// for (let i = 0; i < EmailAddress.length; i++) {
//     if (EmailAddress.charAt(i) == "@") {
//         Atcount += 1;
//     }
// }

// if (EmailAddress.charAt(0) == "@") {
//     var firstat = false
// }
// if (Atcount === 1) {    
//     var atcheck = true 
// }

// if (dotcheck.indexOf(".") >= 2) {
//     var emaildot = true 
// }


// if (emaildot == true && firstat == true && atcheck == true) {
//     console.log("your email is correct");
// }

// console.log(emaildot)
// console.log(firstat)
// console.log(atcheck)

//---------------------------------------------------------


// Q5. Write a program that takes a positive integer from user & display the
//     following in your browser.
//     a. number
//     b. round off value of the number
//     c. floor value of the number
//     d. ceil value of the number


// var usernum = "3.45214";

// console.log("Number " + parseInt(Math.round(usernum)));
// console.log("Number " + parseInt(Math.floor(usernum)));
// console.log("Number " + parseInt(Math.ceil(usernum)));

//---------------------------------------------------------

//Q6. Write a program that simulates a dice using random() method of JS
//    Math class. Display the value of dice in your browser.


// var RandomNumber = Math.random()
// var dice = Math.ceil(RandomNumber * 6);
// console.log(dice)

//---------------------------------------------------------



// Q8. Convert number in words
// limitation 1 to 999

// var x = parseInt(prompt("Enter number"))
// var usernumber = x;

// const oneToNineteen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
// const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
// const HunThu = ['Hundred','Thousand']

// if (usernumber <= 19) {
//     console.log(oneToNineteen[usernumber] + " only")
// }

// if (usernumber >= 20 && usernumber <100) {
//     var usernumberstr = String(usernumber)
//     var a = tens[parseInt(usernumberstr.charAt(0))] + " " + oneToNineteen[parseInt(usernumberstr.charAt(1))];
//     var ans = a.charAt(0).toUpperCase(); 
//     var s = a.toLocaleLowerCase();
//     var wer = s.slice(1,a.length)
//     console.log((ans + wer).replace("  "," ") + " only")

// }

// if (usernumber >= 100 && usernumber <999) {

// if (usernumber >= 100 && usernumber <120 || usernumber >= 200 && usernumber <220 || usernumber >= 300 && usernumber <320 || usernumber >= 400 && usernumber <420 || usernumber >= 500 && usernumber <520
//                                          || usernumber >= 600 && usernumber <620 || usernumber >= 700 && usernumber <720 || usernumber >= 800 && usernumber <820 || usernumber >= 900 && usernumber <920) {
    
//         var usernumberstr = String(usernumber)
//         var a = oneToNineteen[parseInt(usernumberstr.charAt(0))] + " " + HunThu[0] + " " + oneToNineteen[parseInt(usernumberstr.slice(1,3))];
//         var ans = a.charAt(0).toUpperCase() 
//         var s = a.toLocaleLowerCase();
//         var wer = s.slice(1,a.length)
//         console.log((ans + wer).replace(["  ","   "]," ") + " only")

// }
//     else {
//         var usernumberstr = String(usernumber)
//         var a = oneToNineteen[parseInt(usernumberstr.charAt(0))] + " " + HunThu[0] + " " + tens[parseInt(usernumberstr.charAt(1))] + " " + oneToNineteen[parseInt(usernumberstr.charAt(2))];
//         var ans = a.charAt(0).toUpperCase() 
//         var s = a.toLocaleLowerCase();
//         var wer = s.slice(1,a.length)
//         console.log((ans + wer).replace("  "," ") + " only")
// }
    
// }

//---------------------------------------------------------


// Q10. Write a program that round a number to a given decimal places.

// var a = 16.765       // 2
// var b = 12.37982     // 2
// var c = -9.3079499   // 4


// console.log(a.toFixed(2));
// console.log(b.toFixed(2));
// console.log(c.toFixed(4));

//---------------------------------------------------------

//Q11. Write a program to take input of a Number and find a Mean of All Digits


// var a =  42 //= 6 + 6 + 6 = 18 /3 = 6
// var b = 1246 //= 1 + 2 + 4 + 5 = 12 / 4 = 3
// var c = 0;
// d  = b.toString()

// for (let i = 0; i < d.length; i++) {
//     var e = d.charAt(i)
//     c += parseInt(e)
// }
// console.log(Math.round(c / d.length))


//---------------------------------------------------------


// Q12. Write a program that shows the message “First fifteen days of the
//      month” if the date is less than the 16th of the month else shows “Last
//      days of the month”.



// var a = new Date();

// var b = a.getDate()
// console.log(b)

// if( a.getDate() < 15){

//     console.log("First fifteen days of the month")
// }
// else{
//     console.log("Last days of the month")
// }

//---------------------------------------------------------

// Q13. Write a program that determines the minutes since midnight, Jan
    //  1, 1970 and assigns it to a variable that hasn't been declared
//      beforehand. Use any variable you like to represent the Date object.

// var a = new Date("12/05/2015 22:32:23:386 GMT+0500 (PKT)")
// var b = a.getTime();

// console.log(b)
// console.log(b / 1000 / 60 / 60)

//---------------------------------------------------------

// Q15. Write a program to ask the user about his age. Calculate and show
//      his birth year in your browser

// var UserBirth = new Date(prompt("enter your birth date"))
// console.log(UserBirth)
// var CurrentDate = new Date()


// var User = UserBirth.getFullYear()
// var Current = CurrentDate.getFullYear();  

// console.log("your Age is " + (Current-User))
// console.log("your Birth Year is " + User)

//---------------------------------------------------------


