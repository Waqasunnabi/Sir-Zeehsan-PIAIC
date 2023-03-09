// Q13. Write a program that determines the minutes since midnight, Jan
    //  1, 1970 and assigns it to a variable that hasn't been declared
//      beforehand. Use any variable you like to represent the Date object.

var a = new Date("12/05/2015 22:32:23:386 GMT+0500 (PKT)")
var b = a.getTime();

console.log(b)
console.log(b / 1000 / 60 / 60)