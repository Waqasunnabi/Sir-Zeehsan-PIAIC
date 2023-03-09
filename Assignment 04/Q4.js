// Q4. Write a program to validate email address with following evaluation
//     a. This string must contain @
//     b. Ths string must contact chars
//     c. The @ must have at least 1 char in front
//     d. The string must contain .(dot) after @ and at least 1 char.

var EmailAddress = "waqas@gmail.com";
var dotcheck =  EmailAddress.slice(EmailAddress.indexOf("@"),(EmailAddress.length));
var Atcount = 0;
var emaildot = false;
var firstat = true;
var atcheck = false;



for (let i = 0; i < EmailAddress.length; i++) {
    if (EmailAddress.charAt(i) == "@") {
        Atcount += 1;
    }
}

if (EmailAddress.charAt(0) == "@") {
    var firstat = false
}
if (Atcount === 1) {    
    var atcheck = true 
}

if (dotcheck.indexOf(".") >= 2) {
    var emaildot = true 
}


if (emaildot == true && firstat == true && atcheck == true) {
    console.log("your email is correct");
}

console.log(emaildot)
console.log(firstat)
console.log(atcheck)
