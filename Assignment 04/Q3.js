// 3. Write a program to take password as an input from user. The
//    password must qualify these requirements:
//    a. It should contain alphabets and numbers
//    b. It should not start with a number
//    c. It must at least 8 characters long
//    d. If the password does not meet the above requirements, prompt
//    the user to enter a valid password. For character codes of a-z,
//    A-Z & 0-9


var UserPasswordCheck = prompt("Enter Password Check")

var number = [0,1,2,3,4,5,6,7,8,9]
var CapitalAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var FirstCapital = false
var NumLen = false

for (let i = 0; i < CapitalAlphabet.length; i++) {
    if (UserPasswordCheck.charAt(0) == CapitalAlphabet[i]) {
        var FirstCapital = true;
    }
}

if (UserPasswordCheck.length >= 8) {
    var NumLen = true;
}

if (FirstCapital == true && NumLen == true) {
    console.log("Your Password successfully update")    
}
if (FirstCapital == false) {
    console.log("First letter must be alphabet and capital") 
}
if (NumLen == false) {
    console.log("Least 8 characters long") 
}



